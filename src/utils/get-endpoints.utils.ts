import type { HttpMethod } from "../types";

export function getEndpointKey(method: HttpMethod, route: string): string {
  return `${method}:${route}`;
}
