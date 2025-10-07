import { NextResponse } from 'next/server';
import { redisGet, isRedisConfigured } from '@/lib/redis.js';
import { redisSetJSON, redisGetJSON, redisScan } from '@/lib/redis-helpers.js';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

// In-memory store for clinic metadata (fallback when Redis is not configured)
class ClinicMetadataStore {
  constructor() {
    if (!ClinicMetadataStore.instance) {
      this.data = new Map();
      ClinicMetadataStore.instance = this;
    }
    return ClinicMetadataStore.instance;
  }

  set(key, value) {
    this.data.set(key, value);
  }

  get(key) {
    return this.data.get(key);
  }

  has(key) {
    return this.data.has(key);
  }

  entries() {
    return this.data.entries();
  }

  values() {
    return this.data.values();
  }

  keys() {
    return this.data.keys();
  }
}

const clinicMetadataFallback = new ClinicMetadataStore();

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get('search');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const debug = url.searchParams.get('debug') === 'true';

    // Debug mode - show all clinics in store
    if (debug) {
      const allClinics = [];
      
      if (isRedisConfigured()) {
        try {
          const metadataKeys = await redisScan('clinic:*:metadata');
          for (const key of metadataKeys) {
            const metadata = await redisGetJSON(key);
            const clinicId = key.split(':')[1];
            if (metadata) {
              allClinics.push({
                clinicId,
                ...metadata
              });
            }
          }
        } catch (error) {
          console.error('Debug mode Redis error:', error);
        }
      } else {
        for (const [clinicId, metadata] of clinicMetadataFallback.entries()) {
          allClinics.push({
            clinicId,
            ...metadata
          });
        }
      }
      
      return NextResponse.json({
        debug: true,
        totalClinics: allClinics.length,
        clinics: allClinics,
        storageType: isRedisConfigured() ? 'redis' : 'memory'
      });
    }

    if (search) {
      // Search for specific clinic
      return searchClinic(search);
    } else {
      // Get top clinics
      return getTopClinics(limit);
    }
  } catch (error) {
    console.error('Clinic stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch clinic statistics' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { action, clinicId, clinicName, rating, isSponsored } = await request.json();

    if (action === 'update-metadata') {
      const metadata = {
        name: clinicName,
        rating,
        isSponsored,
        lastUpdated: new Date().toISOString()
      };
      
      // Store in Redis if available
      if (isRedisConfigured()) {
        try {
          await redisSetJSON(`clinic:${clinicId}:metadata`, metadata);
          console.log(`Stored metadata in Redis for clinic: ${clinicName} (ID: ${clinicId})`);
        } catch (error) {
          console.error('Failed to store in Redis, falling back to memory:', error);
          clinicMetadataFallback.set(clinicId, metadata);
        }
      } else {
        // Fallback to in-memory storage
        clinicMetadataFallback.set(clinicId, metadata);
        console.log(`Stored metadata in memory for clinic: ${clinicName} (ID: ${clinicId})`);
      }

      return NextResponse.json({ 
        success: true,
        stored: {
          clinicId,
          clinicName,
          storageType: isRedisConfigured() ? 'redis' : 'memory'
        }
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Clinic metadata update error:', error);
    return NextResponse.json(
      { error: 'Failed to update clinic metadata' },
      { status: 500 }
    );
  }
}

async function searchClinic(searchTerm) {
  const results = [];
  
  console.log(`Searching for: "${searchTerm}"`);
  
  if (isRedisConfigured()) {
    try {
      // Get all clinic metadata keys from Redis
      const metadataKeys = await redisScan('clinic:*:metadata');
      console.log(`Found ${metadataKeys.length} clinics in Redis`);
      
      // Search through Redis metadata
      for (const key of metadataKeys) {
        const metadata = await redisGetJSON(key);
        if (!metadata) continue;
        
        // Extract clinic ID from key: clinic:{id}:metadata
        const clinicId = key.split(':')[1];
        
        if (metadata.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          let clicks = 0;
          try {
            const clickCount = await redisGet(`clinic:${clinicId}:clicks:total`);
            clicks = parseInt(clickCount) || 0;
          } catch (error) {
            console.error(`Failed to get clicks for clinic ${clinicId}:`, error);
          }
          
          results.push({
            clinicId,
            name: metadata.name,
            rating: metadata.rating,
            isSponsored: metadata.isSponsored,
            clicks,
            lastUpdated: metadata.lastUpdated
          });
        }
      }
    } catch (error) {
      console.error('Redis search error, falling back to memory:', error);
      return searchClinicFromMemory(searchTerm);
    }
  } else {
    return searchClinicFromMemory(searchTerm);
  }
  
  console.log(`Found ${results.length} matching clinics`);
  
  // Sort by clicks descending
  results.sort((a, b) => b.clicks - a.clicks);
  
  return NextResponse.json({
    search: searchTerm,
    results,
    count: results.length,
    storageType: 'redis'
  });
}

function searchClinicFromMemory(searchTerm) {
  const results = [];
  
  for (const [clinicId, metadata] of clinicMetadataFallback.entries()) {
    if (metadata.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      results.push({
        clinicId,
        name: metadata.name,
        rating: metadata.rating,
        isSponsored: metadata.isSponsored,
        clicks: 0, // No click tracking in memory fallback
        lastUpdated: metadata.lastUpdated
      });
    }
  }
  
  results.sort((a, b) => b.clicks - a.clicks);
  
  return NextResponse.json({
    search: searchTerm,
    results,
    count: results.length,
    storageType: 'memory'
  });
}

async function getTopClinics(limit) {
  const clinics = [];
  
  if (isRedisConfigured()) {
    try {
      // Get all clinic metadata keys from Redis
      const metadataKeys = await redisScan('clinic:*:metadata');
      console.log(`Getting top ${limit} clinics from ${metadataKeys.length} total in Redis`);
      
      // Get metadata and clicks for each clinic
      for (const key of metadataKeys) {
        const metadata = await redisGetJSON(key);
        if (!metadata) continue;
        
        // Extract clinic ID from key: clinic:{id}:metadata
        const clinicId = key.split(':')[1];
        
        let clicks = 0;
        try {
          const clickCount = await redisGet(`clinic:${clinicId}:clicks:total`);
          clicks = parseInt(clickCount) || 0;
        } catch (error) {
          console.error(`Failed to get clicks for clinic ${clinicId}:`, error);
        }
        
        clinics.push({
          clinicId,
          name: metadata.name,
          rating: metadata.rating,
          isSponsored: metadata.isSponsored,
          clicks,
          lastUpdated: metadata.lastUpdated
        });
      }
    } catch (error) {
      console.error('Redis getTopClinics error, falling back to memory:', error);
      return getTopClinicsFromMemory(limit);
    }
  } else {
    return getTopClinicsFromMemory(limit);
  }
  
  // Sort by clicks descending and take top N
  clinics.sort((a, b) => b.clicks - a.clicks);
  const topClinics = clinics.slice(0, limit);
  
  console.log(`Returning ${topClinics.length} top clinics`);
  
  return NextResponse.json({
    topClinics,
    totalClinics: clinics.length,
    limit,
    storageType: 'redis'
  });
}

function getTopClinicsFromMemory(limit) {
  const clinics = [];
  
  for (const [clinicId, metadata] of clinicMetadataFallback.entries()) {
    clinics.push({
      clinicId,
      name: metadata.name,
      rating: metadata.rating,
      isSponsored: metadata.isSponsored,
      clicks: 0,
      lastUpdated: metadata.lastUpdated
    });
  }
  
  clinics.sort((a, b) => b.clicks - a.clicks);
  const topClinics = clinics.slice(0, limit);
  
  return NextResponse.json({
    topClinics,
    totalClinics: clinics.length,
    limit,
    storageType: 'memory'
  });
}

