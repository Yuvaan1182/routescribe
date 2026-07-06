import type { EventBus } from "../events";
import type {
  ApiDocsEvents,
  HttpMethod,
  Observation,
  Request,
  Response,
} from "../types";

interface CollectInput {
  method: HttpMethod;
  route: string;
  path: string;
  request: Request;
  response: Response;
  duration: number;
}

export interface Collector {
  collect(input: CollectInput): Promise<void>;
}

export function createCollector(eventBus: EventBus<ApiDocsEvents>): Collector {
  async function collect(input: CollectInput): Promise<void> {
    const observation: Observation = {
      method: input.method,
      route: input.route,
      path: input.path,

      request: input.request,
      response: input.response,

      duration: input.duration,
      timestamp: new Date().toISOString(),
    };

    await eventBus.emit("observationCaptured", observation);
  }

  return {
    collect,
  };
}
