import type { EndpointRepository } from "../types";

export interface DocumentationGenerator<TDocument> {
  generate(repository: EndpointRepository): Promise<TDocument>;
}

export interface GeneratorOptions {
  outputPath: string;
}
