import { writeFile } from "node:fs/promises";

import { DEFAULT_CONFIG_FILE } from "../../constants/constants";
import { findConfig } from "../../config";
import { ROUTESCRIBE_CONFIG_TEMPLATE } from "../../templates";

export async function initCommand() {
  if (findConfig()) {
    console.log("✓ RouteScribe is already initialized.");
    return;
  }

  await writeFile(DEFAULT_CONFIG_FILE, ROUTESCRIBE_CONFIG_TEMPLATE, "utf8");

  console.log(`✓ Created ${DEFAULT_CONFIG_FILE}`);

  console.log(`
Next steps

1. Add RouteScribe middleware to your Express app.
2. Start your application.
3. Run: routescribe generate
`);
}
