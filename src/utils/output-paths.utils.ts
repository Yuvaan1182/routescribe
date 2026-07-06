import path from "node:path";

import {
  DEFAULT_OUTPUT_DIRECTORY,
  ENDPOINTS_FILE,
  OPENAPI_JSON_FILE,
  OPENAPI_YAML_FILE,
} from "../constants/constants";

export interface OutputPaths {
  directory: string;

  endpointsFile: string;

  openApiJsonFile: string;

  openApiYamlFile: string;
}

export function getOutputPaths(output = DEFAULT_OUTPUT_DIRECTORY): OutputPaths {
  return {
    directory: output,

    endpointsFile: path.join(output, ENDPOINTS_FILE),

    openApiJsonFile: path.join(output, OPENAPI_JSON_FILE),

    openApiYamlFile: path.join(output, OPENAPI_YAML_FILE),
  };
}
