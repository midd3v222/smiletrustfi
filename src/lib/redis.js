// Minimal Redis REST adapter (Upstash compatible)
// Uses environment variables:
// - UPSTASH_REDIS_REST_URL
// - UPSTASH_REDIS_REST_TOKEN
// Optionally supports REDIS_URL/REDIS_TOKEN for flexibility

function getRedisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.REDIS_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.REDIS_TOKEN;
  if (!url || !token) return null;
  return { url, token };
}

async function send(command, args = []) {
  const config = getRedisConfig();
  if (!config) throw new Error("Redis not configured");
  
  // Upstash REST API expects a different format
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
  
  let data;
  try {
    data = await res.json();
  } catch (jsonError) {
    console.error('Redis response parsing error:', jsonError);
    throw new Error('Redis response parsing failed');
  }
  
  return data.result;
}

export function isRedisConfigured() {
  return Boolean(getRedisConfig());
}

export async function redisIncr(key) {
  const result = await send("INCR", [key]);
  return typeof result === "number" ? result : Number(result);
}

export async function redisExpireAtUnix(key, unixSeconds) {
  const result = await send("EXPIREAT", [key, String(unixSeconds)]);
  return result === 1 || result === "1";
}

export async function redisGet(key) {
  const result = await send("GET", [key]);
  if (result === null || result === undefined) return null;
  return String(result);
}
