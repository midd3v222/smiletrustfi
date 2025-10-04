import { redisGet, isRedisConfigured } from './redis.js';

// Helper to send raw Redis commands
async function sendRedisCommand(command, args = []) {
  const config = getRedisConfig();
  if (!config) throw new Error("Redis not configured");
  
  const body = [command, ...args];
  
  const res = await fetch(config.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Redis error: ${res.status} ${text}`);
  }
  
  const data = await res.json();
  return data.result;
}

function getRedisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.REDIS_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.REDIS_TOKEN;
  if (!url || !token) return null;
  return { url, token };
}

// Set a JSON value in Redis
export async function redisSetJSON(key, value, expirySeconds = null) {
  if (!isRedisConfigured()) {
    throw new Error('Redis not configured');
  }
  
  const jsonString = JSON.stringify(value);
  
  if (expirySeconds) {
    await sendRedisCommand("SET", [key, jsonString, "EX", String(expirySeconds)]);
  } else {
    await sendRedisCommand("SET", [key, jsonString]);
  }
  
  return true;
}

// Get and parse JSON value from Redis
export async function redisGetJSON(key) {
  if (!isRedisConfigured()) {
    return null;
  }
  
  const value = await redisGet(key);
  if (!value) return null;
  
  try {
    return JSON.parse(value);
  } catch (error) {
    console.error(`Failed to parse JSON from Redis key ${key}:`, error);
    return null;
  }
}

// Scan Redis keys with a pattern
export async function redisScan(pattern, count = 100) {
  if (!isRedisConfigured()) {
    return [];
  }
  
  try {
    const keys = [];
    let cursor = '0';
    
    // Perform multiple SCAN operations to get all keys
    do {
      const result = await sendRedisCommand("SCAN", [cursor, "MATCH", pattern, "COUNT", String(count)]);
      
      if (Array.isArray(result) && result.length >= 2) {
        cursor = String(result[0]);
        const foundKeys = result[1];
        
        if (Array.isArray(foundKeys)) {
          keys.push(...foundKeys);
        }
      } else {
        break;
      }
    } while (cursor !== '0');
    
    return keys;
  } catch (error) {
    console.error('Redis SCAN error:', error);
    return [];
  }
}

// Delete a key from Redis
export async function redisDel(key) {
  if (!isRedisConfigured()) {
    return false;
  }
  
  try {
    await sendRedisCommand("DEL", [key]);
    return true;
  } catch (error) {
    console.error(`Failed to delete Redis key ${key}:`, error);
    return false;
  }
}

