import type { Endpoint } from "../../../types";

import type { OpenApiOperation } from "../openapi.types";
import { buildParameters } from "./build-paramaters";

import { buildRequestBody } from "./build-request-body";
import { buildResponse } from "./build-response";

export function buildOperation(endpoint: Endpoint): OpenApiOperation {
  const operation: OpenApiOperation = {
    responses: {
      [endpoint.response.status]: buildResponse(endpoint),
    },
  };

  const parameters = buildParameters(endpoint);

  if (parameters) {
    operation.parameters = parameters;
  }

  const requestBody = buildRequestBody(endpoint);

  if (requestBody) {
    operation.requestBody = requestBody;
  }

  return operation;
}
