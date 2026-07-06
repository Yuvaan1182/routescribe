import { DEFAULT_OUTPUT_DIRECTORY } from "../constants/constants";
import type { RouteScribeConfig } from "./config.types";

export const DEFAULT_CONFIG: RouteScribeConfig = {
  title: "API",
  version: "1.0.0",
  output: DEFAULT_OUTPUT_DIRECTORY,
  ignore: [],
};
