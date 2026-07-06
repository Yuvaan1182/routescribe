import { describe, expect, it } from "vitest";

import { getStatusDescription } from "./http-status";

describe("getStatusDescription()", () => {
  it("returns OK", () => {
    expect(getStatusDescription(200)).toBe("OK");
  });

  it("returns Created", () => {
    expect(getStatusDescription(201)).toBe("Created");
  });

  it("returns Bad Request", () => {
    expect(getStatusDescription(400)).toBe("Bad Request");
  });

  it("returns Internal Server Error", () => {
    expect(getStatusDescription(500)).toBe("Internal Server Error");
  });

  it("falls back for unknown status codes", () => {
    expect(getStatusDescription(999)).toBe("Response");
  });
});
