import type { EndpointRepository } from "../../types";
import type { DocumentationGenerator } from "../generator-interface.generators";
import { buildPaths } from "./builders/build-paths";
import { OpenApiDocument, OpenApiPathItem } from "./openapi.types";

export interface OpenApiGeneratorOptions {
  title: string;
  version: string;
}

export function createOpenApiGenerator(
  options: OpenApiGeneratorOptions,
): DocumentationGenerator<OpenApiDocument> {
  return {
    async generate(repository: EndpointRepository) {
      const endpoints = await repository.findAll();

      const document: OpenApiDocument = {
        openapi: "3.1.0",

        info: {
          title: options.title,
          version: options.version,
        },

        paths: buildPaths(endpoints),
      };

      return document;
    },
  };
}
