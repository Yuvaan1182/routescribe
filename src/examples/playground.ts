/** --- These are code testing files build during dev for testing purpose --- */

import { readFile } from "node:fs/promises";
import { createJsonRepository } from "../repository";

async function main() {
  const repository = createJsonRepository({
    filePath: "./output/endpoints.json",
  });

  await repository.clear();

  await repository.save({
    id: "GET:/hello",
    method: "GET",
    route: "/hello",
    path: "/hello",

    request: {
      headers: {},
      params: {},
      query: {},
      body: undefined,
    },

    response: {
      status: 200,
      headers: {},
      body: {
        message: "Hello",
      },
    },

    metadata: {},

    examples: {
      latest: undefined,
      success: undefined,
      errors: {
        examples: {},
      },
    },

    stats: {
      hits: 1,
      firstSeen: new Date().toISOString(),
      lastSeen: new Date().toISOString(),
      responseTime: {
        average: 5,
        minimum: 5,
        maximum: 5,
      },
    },
  });

  console.dir(await repository.findAll(), {
    depth: null,
  });

  console.log("Raw file:\n", await readFile("./output/endpoints.json", "utf8"));
}

main().catch(console.error);
