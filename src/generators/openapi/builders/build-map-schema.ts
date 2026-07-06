import { inferSchema } from "../../../schema";

import type { Schema } from "../../../schema";
import type { OpenApiSchema } from "../openapi.types";

export function mapSchema(value: unknown): OpenApiSchema {
  const schema = inferSchema(value);

  return mapSchemaUtil(schema);
}

function mapSchemaUtil(schema: Schema): OpenApiSchema {
  switch (schema.type) {
    case "object":
      return {
        type: "object",

        required: schema.required,

        properties: Object.fromEntries(
          Object.entries(schema.properties).map(([key, value]) => [
            key,
            mapSchemaUtil(value),
          ]),
        ),
      };

    case "array":
      return {
        type: "array",

        items: mapSchemaUtil(schema.items),
      };

    default:
      return {
        type: schema.type,
      };
  }
}
