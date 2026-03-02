import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// helper that wraps i18next `t` to fallback gracefully when key is missing
export function safeT(t: (key: string, options?: any) => string, key: string, options?: any): string {
  if (!key) return "";
  let result = t(key, options);
  // if translation returns the key itself or still contains dots, produce a readable fallback
  if (result === key || (typeof result === "string" && result.includes("."))) {
    const last = key.split('.').pop() || key;
    // insert spaces between numbers and letters and before capitals
    const spaced = last
      .replace(/([0-9]+)([a-zA-Z]+)/g, '$1 $2')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/-/g, ' ');
    return spaced;
  }
  return result;
}

// formats a duration key (common.duration.*) using translation or simple heuristics
export function formatDuration(t: (key: string, options?: any) => string, durationKey: string): string {
  if (!durationKey) return "";
  if (durationKey.startsWith('common.duration.')) {
    const translated = safeT(t, durationKey);
    if (translated === durationKey) {
      const parts = durationKey.split('.');
      const last = parts[parts.length - 1];
      return last.replace(/([0-9]+)([a-zA-Z]+)/g, '$1 $2');
    }
    return translated;
  }
  return durationKey;
}