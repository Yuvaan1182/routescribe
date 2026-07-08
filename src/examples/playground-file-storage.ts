/** --- These are code testing files build during dev for testing purpose --- */

import {
  readEndpoints,
  writeEndpoints,
} from "../repository/file-storage.repository";

async function main() {
  console.log("Writing...");

  await writeEndpoints("./output/endpoints.json", []);

  console.log("Reading...");

  const endpoints = await readEndpoints("./output/endpoints.json");

  console.dir(endpoints, {
    depth: null,
  });
}

main().catch(console.error);
