import { OutgoingHttpHeaders } from "http";

export function normalizeResponseHeaders(
  headers: OutgoingHttpHeaders,
): Record<string, string> {
  const normalized: Record<string, string> = {};

  for (const [key, value] of Object.entries(headers)) {
    if (value === undefined) {
      continue;
    }

    if (Array.isArray(value)) {
      normalized[key] = value.join(", ");
    } else {
      normalized[key] = String(value);
    }
  }

  return normalized;
}
