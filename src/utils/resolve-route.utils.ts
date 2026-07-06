import { Request } from "express";

export function resolveRoute(req: Request): string | null {
  if (!req.route?.path) {
    return null;
  }

  return req.baseUrl ? `${req.baseUrl}${req.route.path}` : req.route.path;
}
