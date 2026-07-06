import { createOpenApiGenerator } from "../generators";
import { GenerateOpenApiOptions } from "../generators/openapi/openapi.types";
import { createJsonRepository } from "../repository";
import { getOutputPaths } from "../utils";
import { writeJson, writeYaml } from "../writers";

export async function generateOpenApi(options: GenerateOpenApiOptions) {
  const paths = getOutputPaths(options.output);

  const repository = createJsonRepository({
    filePath: paths.endpointsFile,
  });

  const generator = createOpenApiGenerator({
    title: options.title,
    version: options.version,
  });

  const document = await generator.generate(repository);

  if (options.writeJson) {
    await writeJson(paths.openApiJsonFile, document);
  }

  const files: string[] = [];

  if (options.writeJson) {
    await writeJson(paths.openApiJsonFile, document);

    files.push(paths.openApiJsonFile);
  }

  if (options.writeYaml) {
    await writeYaml(paths.openApiYamlFile, document);

    files.push(paths.openApiYamlFile);
  }

  return {
    document,
    files,
  };
}
