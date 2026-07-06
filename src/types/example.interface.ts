import { Request } from "./request.interface";
import { Response } from "./response.interface";

export interface Example {
  capturedAt: string;
  request: Request;
  response: Response;
}
