// Simple in-memory TTL cache for server runtime
// Note: This cache lives per server instance and resets on redeploy

const store = new Map();

function nowMs() {
  return Date.now();
}

export function getCache(key) {
  const entry = store.get(key);
  if (!entry) return undefined;
  if (entry.expiresAtMs && entry.expiresAtMs < nowMs()) {
    store.delete(key);
    return undefined;
  }
  return entry.value;
}

export function setCache(key, value, ttlSeconds) {
  const expiresAtMs = ttlSeconds ? nowMs() + ttlSeconds * 1000 : undefined;
  store.set(key, { value, expiresAtMs });
}

export function deleteCache(key) {
  store.delete(key);
}

export function clearCache() {
  store.clear();
}

export function makeCacheKey(prefix, parts = []) {
  const stable = parts
    .map((p) => (typeof p === "object" ? JSON.stringify(p) : String(p)))
    .join("|");
  return `${prefix}:${stable}`;
}
