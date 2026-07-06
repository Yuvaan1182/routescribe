export type Schema = PrimitiveSchema | ObjectSchema | ArraySchema;

export interface PrimitiveSchema {
  type: "string" | "number" | "integer" | "boolean" | "null";
}

export interface ObjectSchema {
  type: "object";

  properties: Record<string, Schema>;

  required: string[];
}

export interface ArraySchema {
  type: "array";

  items: Schema;
}
