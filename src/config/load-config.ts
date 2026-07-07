import { pathToFileURL } from "node:url";

import { DEFAULT_CONFIG } from "./defaults";
import { findConfig } from "./find-config";

export async function loadConfig() {
  const configPath = findConfig();

  if (!configPath) {
    return DEFAULT_CONFIG;
  }

  const module = await import(pathToFileURL(configPath).href);

  return {
    ...DEFAULT_CONFIG,
    ...(module.default ?? module),
  };
}
