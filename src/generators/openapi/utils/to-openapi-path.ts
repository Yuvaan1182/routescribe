export function normalizeOpenApiPath(route: string): string {
  return route.replace(/:([A-Za-z0-9_]+)/g, "{$1}");
}
