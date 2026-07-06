import type { Endpoint } from "../../../types";

import type { OpenApiRequestBody } from "../openapi.types";
import { mapSchema } from "./build-map-schema";

export function buildRequestBody(
  endpoint: Endpoint,
): OpenApiRequestBody | undefined {
  const body = endpoint.examples.success?.request.body;

  if (body === undefined) {
    return undefined;
  }

  return {
    required: true,

    content: {
      "application/json": {
        schema: mapSchema(body),
        example: body,
      },
    },
  };
}
