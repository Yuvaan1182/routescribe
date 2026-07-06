import { createCollector } from "../collector";
import { createEventBus } from "../events";
import { createExpressMiddleware } from "../middleware";
import {
  createJsonRepository,
  registerRepositoryListeners,
} from "../repository";

import type { ApiDocsEvents } from "../types";
import type { RouteScribe, RouteScribeOptions } from "./route-scribe.types";
import { getOutputPaths } from "../utils";

export function createRouteScribe(
  options: RouteScribeOptions = {},
): RouteScribe {
  const eventBus = createEventBus<ApiDocsEvents>();

  const paths = getOutputPaths(options.output);

  const repository = createJsonRepository({
    filePath: paths.endpointsFile,
  });

  registerRepositoryListeners(eventBus, repository);

  const collector = createCollector(eventBus);

  return {
    middleware() {
      return createExpressMiddleware(collector, {
        shouldCollect(route) {
          return !options.ignore?.includes(route);
        },
      });
    },

    async getEndpoints() {
      return repository.findAll();
    },
  };
}
