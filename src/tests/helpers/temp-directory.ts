import { randomUUID } from "node:crypto";
import path from "node:path";

export function createTempDirectory() {
  return path.join(process.cwd(), "tests", ".tmp", randomUUID());
}
