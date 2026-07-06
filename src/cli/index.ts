#!/usr/bin/env node

import { generateCommand } from "./commands";

async function main() {
  const command = process.argv[2];

  switch (command) {
    case "generate":
      await generateCommand();
      break;

    default:
      console.log(`
        RouteScribe CLI

        Usage:
        routescribe <command>

        Commands:
        generate     Generate OpenAPI artifacts
    `);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
