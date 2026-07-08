/** --- These are code testing files build during dev for testing purpose --- */

import { createJsonRepository } from "../repository";

async function main() {
  const repository = createJsonRepository({
    filePath: "./output/endpoints.json",
  });

  await repository.clear();

  console.log(await repository.findAll());
}

main().catch(console.error);
