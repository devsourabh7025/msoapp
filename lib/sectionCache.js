const cache = {};
const CACHE_TTL_MS = 5 * 60 * 1000;

export function getCached(key, { fallback = false } = {}) {
  const entry = cache[key];
  if (!entry) return null;
  if (!fallback && Date.now() - entry.ts > CACHE_TTL_MS) return null;
  return entry.data;
}

export function setCache(key, data) {
  cache[key] = { data, ts: Date.now() };
}

/**
 * Race a promise against a hard deadline so a stuck socket
 * can never block the page render longer than `ms`.
 */
export function withTimeout(promise, ms) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(`Hard timeout after ${ms}ms`)), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}
