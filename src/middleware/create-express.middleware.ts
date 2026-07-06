import { normalizeRequestHeaders, resolveRoute } from "../utils";
import { captureResponse } from "./capture-response.middleware";
import type { NextFunction, Request, Response, RequestHandler } from "express";

import type { Collector } from "../collector";
import { normalizeResponseHeaders } from "../utils/normalize-res-headers.utils";
import { toHttpMethod } from "../utils/http-method.utils";

export interface ExpressMiddlewareOptions {
  shouldCollect?(route: string): boolean;
}

export function createExpressMiddleware(
  collector: Collector,
  options: ExpressMiddlewareOptions = {},
): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const startedAt = Date.now();
    const responseCapture = captureResponse(res);

    res.on("finish", async () => {
      /** ignore invalid 404 request to be stored */
      if (!req.route) {
        return;
      }

      const duration = Date.now() - startedAt;
      const route = resolveRoute(req);

      if (!route) {
        return;
      }

      if (options.shouldCollect && !options.shouldCollect(route)) {
        return;
      }

      await collector.collect({
        method: toHttpMethod(req.method),

        route: route,

        path: req.originalUrl,

        request: {
          headers: normalizeRequestHeaders(req.headers),
          params: req.params,
          query: req.query,
          body: req.body,
        },

        response: {
          status: res.statusCode,
          headers: normalizeResponseHeaders(res.getHeaders()),
          body: responseCapture.getBody(),
        },

        duration,
      });
    });

    next();
  };
}
