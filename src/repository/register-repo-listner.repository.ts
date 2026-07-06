import { EventBus } from "../events";
import { ApiDocsEvents, EndpointRepository } from "../types";
import { mergeObservation } from "../merge";

export function registerRepositoryListeners(
  eventBus: EventBus<ApiDocsEvents>,
  repository: EndpointRepository,
): void {
  eventBus.on("observationCaptured", async (observation) => {
    const endpoint = await repository.findByRoute(
      observation.method,
      observation.route,
    );

    const mergedEndpoint = mergeObservation(endpoint, observation);

    await repository.save(mergedEndpoint);
  });
}
