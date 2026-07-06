import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import type { Endpoint } from "../types";

export async function readEndpoints(filePath: string): Promise<Endpoint[]> {
  try {
    console.log("Reading from:", resolve(filePath));
    const content = await readFile(filePath, "utf-8");

    return JSON.parse(content) as Endpoint[];
  } catch {
    return [];
  }
}

export async function writeEndpoints(
  filePath: string,
  endpoints: Endpoint[],
): Promise<void> {
  await mkdir(dirname(filePath), {
    recursive: true,
  });

  console.log("Writing to:", filePath);

  await writeFile(filePath, JSON.stringify(endpoints, null, 2), "utf-8");
}
