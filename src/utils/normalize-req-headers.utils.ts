import type { IncomingHttpHeaders } from "node:http";

export function normalizeRequestHeaders(
  headers: IncomingHttpHeaders,
): Record<string, string> {
  const normalized: Record<string, string> = {};

  for (const [key, value] of Object.entries(headers)) {
    if (value === undefined) {
      continue;
    }

    normalized[key] = Array.isArray(value) ? value.join(", ") : value;
  }

  return normalized;
}
