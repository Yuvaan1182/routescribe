import type { Endpoint } from "../../../types";

import type { OpenApiPathItem } from "../openapi.types";

import { buildOperation } from "./build-operation";
import { normalizeOpenApiPath } from "../utils";

export function buildPaths(
  endpoints: Endpoint[],
): Record<string, OpenApiPathItem> {
  const paths: Record<string, OpenApiPathItem> = {};

  for (const endpoint of endpoints) {
    const method = endpoint.method.toLowerCase() as keyof OpenApiPathItem;

    const openApiPath = normalizeOpenApiPath(endpoint.route);

    paths[openApiPath] ??= {};

    paths[openApiPath][method] = buildOperation(endpoint);
  }

  return paths;
}
