/** --- These are code testing files build during dev for testing purpose --- */

import { buildResponse } from "../generators/openapi/builders/build-response";
import { buildOperation } from "../generators/openapi/builders/build-operation";
import { buildPaths } from "../generators/openapi/builders/build-paths";

import type { Endpoint } from "../types";

const endpoint: Endpoint = {
  id: "GET:/hello",
  method: "GET",
  route: "/hello",
  path: "/hello",

  request: {
    headers: {},
    params: {},
    query: {},
    body: undefined,
  },

  response: {
    status: 200,
    headers: {},
    body: {
      message: "Hello",
    },
  },

  metadata: {},

  examples: {
    latest: undefined,
    success: undefined,
    errors: {
      examples: {},
    },
  },

  stats: {
    hits: 1,
    firstSeen: new Date().toISOString(),
    lastSeen: new Date().toISOString(),
    responseTime: {
      average: 5,
      minimum: 5,
      maximum: 5,
    },
  },
};

console.dir(buildResponse(endpoint), { depth: null });

console.dir(buildOperation(endpoint), { depth: null });

console.dir(buildPaths([endpoint]), { depth: null });
