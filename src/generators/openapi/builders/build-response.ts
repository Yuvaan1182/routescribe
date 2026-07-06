import type { Endpoint } from "../../../types";

import type { OpenApiResponse } from "../openapi.types";
import { getStatusDescription } from "../utils";
import { mapSchema } from "./build-map-schema";

export function buildResponse(endpoint: Endpoint): OpenApiResponse {
  const example = endpoint.examples.success?.response.body;

  return {
    description: getStatusDescription(endpoint.response.status),

    content:
      example === undefined
        ? undefined
        : {
            "application/json": {
              schema: mapSchema(example),
              example,
            },
          },
  };
}
