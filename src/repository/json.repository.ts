import type { Endpoint, EndpointRepository, HttpMethod } from "../types";

import { readEndpoints, writeEndpoints } from "./file-storage.repository";

export interface JsonRepositoryOptions {
  filePath: string;
}

export function createJsonRepository(
  options: JsonRepositoryOptions,
): EndpointRepository {
  const { filePath } = options;

  function getKey(method: HttpMethod, route: string): string {
    return `${method}:${route}`;
  }

  return {
    async findByRoute(method, route) {
      const endpoints = await readEndpoints(filePath);

      return (
        endpoints.find(
          (endpoint) => endpoint.method === method && endpoint.route === route,
        ) ?? null
      );
    },

    async save(endpoint) {
      const endpoints = await readEndpoints(filePath);

      const index = endpoints.findIndex(
        (current) =>
          current.method === endpoint.method &&
          current.route === endpoint.route,
      );

      if (index === -1) {
        endpoints.push(endpoint);
      } else {
        endpoints[index] = endpoint;
      }

      await writeEndpoints(filePath, endpoints);
    },

    async findAll() {
      return readEndpoints(filePath);
    },

    async clear() {
      await writeEndpoints(filePath, []);
    },
  };
}
