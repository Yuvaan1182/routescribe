import type { Response } from "express";

export interface ResponseCapture {
  getBody(): unknown;
}

export function captureResponse(res: Response): ResponseCapture {
  let body: unknown;

  const originalJson = res.json.bind(res);
  const originalSend = res.send.bind(res);

  res.json = function (payload: unknown) {
    console.dir(payload, { depth: null });

    body = payload;

    return originalJson(payload);
  } as typeof res.json;

  res.send = function (payload: unknown) {
    console.dir(payload, { depth: null });

    if (body === undefined) {
      body = payload;
    }

    return originalSend(payload);
  } as typeof res.send;

  return {
    getBody() {
      return body;
    },
  };
}
