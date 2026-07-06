import { EndpointMetadata } from "./endpoint-metadata.interface";
import { EndpointStats } from "./endpoint-stats.interface";
import { ExampleStore } from "./example-store.interface";
import { HttpMethod } from "./http-method.types";
import { Request } from "./request.interface";
import { Response } from "./response.interface";

export interface Endpoint {
  id: string;
  method: HttpMethod;
  route: string;
  path: string;
  request: Request;
  response: Response;
  examples: ExampleStore;
  metadata?: EndpointMetadata;
  stats: EndpointStats;
}
