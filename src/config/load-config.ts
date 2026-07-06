import { DEFAULT_CONFIG } from "./defaults";
import { findConfig } from "./find-config";

export async function loadConfig() {
  const configPath = findConfig();

  if (!configPath) {
    return DEFAULT_CONFIG;
  }

  const module = await import(configPath);

  return {
    ...DEFAULT_CONFIG,
    ...module.default,
  };
}
