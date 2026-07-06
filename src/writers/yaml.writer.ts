import { promises as fs } from "node:fs";
import path from "node:path";

import { stringify } from "yaml";

export async function writeYaml(
  filePath: string,
  document: unknown,
): Promise<void> {
  await fs.mkdir(path.dirname(filePath), {
    recursive: true,
  });

  await fs.writeFile(filePath, stringify(document), "utf8");
}
