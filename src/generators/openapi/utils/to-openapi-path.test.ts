import { describe, expect, it } from "vitest";

import { normalizeOpenApiPath } from "./to-openapi-path";

describe("normalizeOpenApiPath()", () => {
  it("converts a single route parameter", () => {
    expect(normalizeOpenApiPath("/users/:id")).toBe("/users/{id}");
  });

  it("converts multiple route parameters", () => {
    expect(normalizeOpenApiPath("/users/:userId/posts/:postId")).toBe(
      "/users/{userId}/posts/{postId}",
    );
  });

  it("returns unchanged routes without parameters", () => {
    expect(normalizeOpenApiPath("/login")).toBe("/login");
  });

  it("returns root route unchanged", () => {
    expect(normalizeOpenApiPath("/")).toBe("/");
  });
});
