// Simple in-memory fixed-window quota tracker
// Note: Per-instance only; use Redis for cross-instance durability.

const quotaStore = new Map();

function getTodayKeyPrefix() {
  const now = new Date();
  // YYYY-MM-DD
  return now.toISOString().slice(0, 10);
}

export function getQuotaUsage(key) {
  const record = quotaStore.get(key);
  if (!record) return { count: 0, resetAtMs: getWindowResetAtMs() };
  // If window expired, treat as zero usage
  if (record.resetAtMs <= Date.now()) {
    quotaStore.delete(key);
    return { count: 0, resetAtMs: getWindowResetAtMs() };
  }
  return { count: record.count, resetAtMs: record.resetAtMs };
}

export function checkAndIncrementDailyQuota(identifier, limitPerDay) {
  const windowPrefix = getTodayKeyPrefix();
  const key = `${windowPrefix}:${identifier}`;
  const now = Date.now();
  const resetAtMs = getWindowResetAtMs();

  const current = quotaStore.get(key);
  if (!current) {
    quotaStore.set(key, { count: 1, resetAtMs });
    return {
      allowed: true,
      remaining: Math.max(0, limitPerDay - 1),
      resetAtMs,
    };
  }

  if (current.resetAtMs <= now) {
    quotaStore.set(key, { count: 1, resetAtMs });
    return {
      allowed: true,
      remaining: Math.max(0, limitPerDay - 1),
      resetAtMs,
    };
  }

  if (current.count >= limitPerDay) {
    return { allowed: false, remaining: 0, resetAtMs: current.resetAtMs };
  }

  current.count += 1;
  quotaStore.set(key, current);
  return {
    allowed: true,
    remaining: Math.max(0, limitPerDay - current.count),
    resetAtMs: current.resetAtMs,
  };
}

function getWindowResetAtMs() {
  const now = new Date();
  const reset = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + 1,
      0,
      0,
      0
    )
  );
  return reset.getTime();
}

export function resetAllQuotas() {
  quotaStore.clear();
  return { cleared: true, timestamp: new Date().toISOString() };
}
