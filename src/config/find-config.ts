import fs from "node:fs";
import path from "node:path";

const CONFIG_FILES = [
  "routescribe.config.ts",
  "routescribe.config.js",
  "routescribe.config.mjs",
  "routescribe.config.cjs",
] as const;

export function findConfig(): string | null {
  for (const file of CONFIG_FILES) {
    const configPath = path.resolve(process.cwd(), file);

    if (fs.existsSync(configPath)) {
      return configPath;
    }
  }

  return null;
}
