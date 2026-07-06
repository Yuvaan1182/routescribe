import type { Schema } from "./schema.types";

export function inferSchema(value: unknown): Schema {
  if (value === null) {
    return {
      type: "null",
    };
  }

  switch (typeof value) {
    case "string":
      return {
        type: "string",
      };

    case "boolean":
      return {
        type: "boolean",
      };

    case "number":
      return {
        type: Number.isInteger(value) ? "integer" : "number",
      };

    case "object": {
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return {
            type: "array",
            items: {
              type: "null",
            },
          };
        }

        const [first] = value;

        return {
          type: "array",
          items: inferSchema(first),
        };
      }

      const properties: Record<string, Schema> = {};

      const required: string[] = [];

      for (const [key, property] of Object.entries(value)) {
        properties[key] = inferSchema(property);
        required.push(key);
      }

      return {
        type: "object",
        properties,
        required,
      };
    }

    default:
      throw new Error(`Unsupported type: ${typeof value}`);
  }

  throw new Error("Unsupported value");
}
