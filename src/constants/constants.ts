export const DEFAULT_OUTPUT_DIRECTORY = ".routescribe";

export const ENDPOINTS_FILE = "endpoints.json";

export const OPENAPI_JSON_FILE = "openapi.json";

export const OPENAPI_YAML_FILE = "openapi.yaml";

export const CONFIG_FILE = "routescribe.config.ts";

export const DEFAULT_CONFIG_FILE = "routescribe.config.js";

export const CONFIG_FILES = [
  DEFAULT_CONFIG_FILE,
  "routescribe.config.mjs",
  "routescribe.config.cjs",
] as const;
