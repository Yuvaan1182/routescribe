import type { HttpMethod } from "../types";

export function toHttpMethod(method: string): HttpMethod {
  return method as HttpMethod;
}
