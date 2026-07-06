import { promises as fs } from "node:fs";
import path from "node:path";

export async function writeJson(
  filePath: string,
  document: unknown,
): Promise<void> {
  await fs.mkdir(path.dirname(filePath), {
    recursive: true,
  });

  await fs.writeFile(filePath, JSON.stringify(document, null, 2), "utf8");
}
