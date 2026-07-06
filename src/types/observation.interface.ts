import { HttpMethod } from "./http-method.types";
import { Request } from "./request.interface";
import { Response } from "./response.interface";

export interface Observation {
  request: Request;
  response: Response;
  method: HttpMethod;
  route: string;
  path: string;
  duration: number;
  timestamp: string;
}
