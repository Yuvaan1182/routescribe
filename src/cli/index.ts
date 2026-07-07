#!/usr/bin/env node

import { generateCommand, initCommand } from "./commands";

async function main() {
  const command = process.argv[2];

  switch (command) {
    case "init":
      await initCommand();
      break;

    case "generate":
      await generateCommand();
      break;

    default:
      console.log(`
        Usage:

        routescribe init
        routescribe generate`);

      process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
