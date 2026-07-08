import { existsSync, rmSync } from "node:fs";
import path from "node:path";

import { afterEach, describe, expect, it } from "vitest";
import { createTempDirectory } from "./helpers/temp-directory";
import { writeEndpoints } from "../repository";
import { generateOpenApi } from "../services";

describe("generateOpenApi()", () => {
  const output = createTempDirectory();

  afterEach(() => {
    rmSync(output, {
      recursive: true,
      force: true,
    });
  });

  it("generates OpenAPI and writes JSON", async () => {
    await writeEndpoints(path.join(output, "endpoints.json"), [
      {
        id: "GET:/hello",

        method: "GET",

        route: "/hello",

        path: "/hello",

        request: {
          headers: {},
          params: {},
          query: {},
          body: {},
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
          errors: {
            examples: {},
          },
        },

        stats: {
          hits: 1,

          firstSeen: new Date().toISOString(),

          lastSeen: new Date().toISOString(),

          responseTime: {
            average: 1,
            minimum: 1,
            maximum: 1,
          },
        },
      },
    ]);

    const result = await generateOpenApi({
      output,

      title: "Test API",

      version: "1.0.0",

      writeJson: true,

      writeYaml: true,
    });

    expect(result.document.openapi).toBe("3.1.0");

    expect(result.files).toHaveLength(2);

    expect(existsSync(path.join(output, "openapi.json"))).toBe(true);

    expect(existsSync(path.join(output, "openapi.yaml"))).toBe(true);
  });
});
