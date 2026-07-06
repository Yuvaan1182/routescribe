import type { Endpoint } from "../types";
import type { RequestHandler } from "express";

export interface RouteScribeOptions {
  output?: string;

  title?: string;

  version?: string;

  ignore?: string[];
}

export interface RouteScribe {
  middleware(): RequestHandler;

  getEndpoints(): Promise<Endpoint[]>;
}
