import { loadConfig } from "../../config";
import { generateOpenApi } from "../../services";

export async function generateCommand() {
  const config = await loadConfig();

  const result = await generateOpenApi({
    ...config,
    writeJson: true,
    writeYaml: true,
  });

  console.log("✓ OpenAPI generated");

  for (const file of result.files) {
    console.log(`✓ ${file}`);
  }
}
