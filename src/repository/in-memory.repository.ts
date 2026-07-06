import type { Endpoint, EndpointRepository } from "../types";
import { getEndpointKey } from "../utils/get-endpoints.utils";

export function createInMemoryRepository(): EndpointRepository {
  const store = new Map<string, Endpoint>();

  return {
    async findByRoute(method, route) {
      return store.get(getEndpointKey(method, route)) ?? null;
    },

    async save(endpoint) {
      store.set(getEndpointKey(endpoint.method, endpoint.route), endpoint);
    },

    async findAll() {
      return [...store.values()];
    },

    async clear() {
      store.clear();
    },
  };
}
