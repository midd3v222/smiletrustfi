import { NextResponse } from 'next/server';
import { analyticsTracker } from '@/lib/analytics.js';
import { isRedisConfigured } from '@/lib/redis.js';
import { clearCache } from '@/lib/cache.js';
import { resetAllQuotas } from '@/lib/quota.js';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

export async function POST(request, { params }) {
  try {
    const { action } = params;

    switch (action) {
      case 'export':
        return await handleExport(request);
      
      case 'clear-cache':
        return await handleClearCache(request);
      
      case 'reset-quota':
        return await handleResetQuota(request);
      
      case 'test-email':
        return await handleTestEmail(request);
      
      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Admin action error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to execute action' },
      { status: 500 }
    );
  }
}

async function handleExport(request) {
  try {
    // Get comprehensive stats for all timeframes
    const stats7d = await analyticsTracker.getStats('7d');
    const stats30d = await analyticsTracker.getStats('30d');
    
    const exportData = {
      exportDate: new Date().toISOString(),
      stats: {
        last7Days: stats7d,
        last30Days: stats30d,
      },
      metadata: {
        redisEnabled: isRedisConfigured(),
        environment: process.env.NODE_ENV || 'development',
      }
    };
    
    return NextResponse.json({
      message: 'Analytics data exported successfully',
      data: exportData
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { error: 'Failed to export analytics data' },
      { status: 500 }
    );
  }
}

async function handleClearCache(request) {
  try {
    // Clear in-memory cache
    clearCache();
    
    if (isRedisConfigured()) {
      // Redis cache note
      return NextResponse.json({
        message: 'In-memory cache cleared successfully',
        details: {
          inMemoryCacheCleared: true,
          redisEnabled: true,
          note: 'Redis cache persists. Individual entries will expire based on TTL.'
        }
      });
    } else {
      return NextResponse.json({
        message: 'Cache cleared successfully',
        details: {
          inMemoryCacheCleared: true,
          redisEnabled: false
        }
      });
    }
  } catch (error) {
    console.error('Clear cache error:', error);
    return NextResponse.json(
      { error: 'Failed to clear cache' },
      { status: 500 }
    );
  }
}

async function handleResetQuota(request) {
  try {
    // Reset in-memory quota limits
    const result = resetAllQuotas();
    
    if (isRedisConfigured()) {
      // In a production environment, you'd reset specific quota keys in Redis
      return NextResponse.json({
        message: 'In-memory quota limits reset successfully',
        details: {
          inMemoryQuotasCleared: true,
          redisEnabled: true,
          timestamp: result.timestamp,
          note: 'Redis quotas persist. They will reset at end of day.'
        }
      });
    } else {
      return NextResponse.json({
        message: 'Quota limits reset successfully',
        details: {
          inMemoryQuotasCleared: true,
          redisEnabled: false,
          timestamp: result.timestamp
        }
      });
    }
  } catch (error) {
    console.error('Reset quota error:', error);
    return NextResponse.json(
      { error: 'Failed to reset quota limits' },
      { status: 500 }
    );
  }
}

async function handleTestEmail(request) {
  try {
    // Simulate email test
    // In production, you'd integrate with a service like SendGrid, Resend, etc.
    
    const testEmail = {
      to: process.env.ADMIN_EMAIL || 'admin@example.com',
      subject: 'SmileTrust Admin Test Email',
      body: `This is a test email from the SmileTrust admin panel.
      
Timestamp: ${new Date().toISOString()}
Environment: ${process.env.NODE_ENV || 'development'}
      
If you received this email, the notification system is working correctly.`,
    };
    
    console.log('Test email would be sent:', testEmail);
    
    return NextResponse.json({
      message: 'Test email notification logged successfully',
      details: {
        recipient: testEmail.to,
        timestamp: new Date().toISOString(),
        note: 'Email integration not configured. Check server logs for test email details.'
      }
    });
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { error: 'Failed to send test email' },
      { status: 500 }
    );
  }
}

