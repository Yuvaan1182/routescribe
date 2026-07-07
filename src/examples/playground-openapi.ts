import { generateOpenApi } from "../services";

async function main() {
  const result = await generateOpenApi({
    output: "./scribe-docs",
    title: "Auth API",
    version: "1.0.0",
    writeJson: true,
  });

  console.dir(result.document, {
    depth: null,
  });

  console.log("Generated files:");

  console.dir(result.files);
}

main().catch(console.error);
