import fs from "node:fs";
import path from "node:path";
import { CONFIG_FILES } from "../constants/constants";

export function findConfig(): string | null {
  for (const file of CONFIG_FILES) {
    const configPath = path.resolve(process.cwd(), file);

    if (fs.existsSync(configPath)) {
      return configPath;
    }
  }

  return null;
}
