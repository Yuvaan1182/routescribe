import { Endpoint } from "./endpoint.interface";
import { HttpMethod } from "./http-method.types";

export interface EndpointRepository {
  findByRoute(method: HttpMethod, route: string): Promise<Endpoint | null>;
  save(endpoint: Endpoint): Promise<void>;
  findAll(): Promise<Endpoint[]>;
  clear(): Promise<void>;
}
