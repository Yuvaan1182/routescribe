import { DEFAULT_OUTPUT_DIRECTORY } from "../constants/constants";

export const ROUTESCRIBE_CONFIG_TEMPLATE = `module.exports = {
  title: "My API",
  version: "1.0.0",

  // Directory where RouteScribe stores generated artifacts
  output: "${DEFAULT_OUTPUT_DIRECTORY}",
  
  // exact route matching
  ignores: [
    // "/health",
    // "/metrics",
    // "/internal",
  ],
};
`;
