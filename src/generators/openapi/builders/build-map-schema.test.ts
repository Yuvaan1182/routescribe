import { describe, expect, it } from "vitest";

import { mapSchema } from "./build-map-schema";

describe("mapSchema()", () => {
  it("maps strings", () => {
    expect(mapSchema("hello")).toEqual({
      type: "string",
    });
  });

  it("maps integers", () => {
    expect(mapSchema(42)).toEqual({
      type: "integer",
    });
  });

  it("maps booleans", () => {
    expect(mapSchema(true)).toEqual({
      type: "boolean",
    });
  });

  it("maps arrays", () => {
    expect(mapSchema(["a", "b"])).toEqual({
      type: "array",
      items: {
        type: "string",
      },
    });
  });

  it("maps nested objects", () => {
    expect(
      mapSchema({
        user: {
          id: 1,
          email: "john@example.com",
        },
      }),
    ).toEqual({
      type: "object",
      required: ["user"],
      properties: {
        user: {
          type: "object",
          required: ["id", "email"],
          properties: {
            id: {
              type: "integer",
            },
            email: {
              type: "string",
            },
          },
        },
      },
    });
  });
});
