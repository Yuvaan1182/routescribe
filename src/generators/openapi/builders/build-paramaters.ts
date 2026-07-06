import type { Endpoint } from "../../../types";

import type { OpenApiParameter } from "../openapi.types";
import { mapSchema } from "./build-map-schema";

export function buildParameters(
  endpoint: Endpoint,
): OpenApiParameter[] | undefined {
  const parameters: OpenApiParameter[] = [];

  for (const [name, value] of Object.entries(endpoint.request.params)) {
    parameters.push({
      name,

      in: "path",

      required: true,

      schema: mapSchema(value),

      example: value,
    });
  }

  for (const [name, value] of Object.entries(endpoint.request.query)) {
    parameters.push({
      name,

      in: "query",

      required: false,

      schema: mapSchema(value),

      example: value,
    });
  }

  return parameters.length > 0 ? parameters : undefined;
}
