const STATUS_DESCRIPTIONS: Record<number, string> = {
  200: "OK",
  201: "Created",
  202: "Accepted",
  204: "No Content",

  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",

  409: "Conflict",

  422: "Unprocessable Entity",

  500: "Internal Server Error",
};

export function getStatusDescription(status: number): string {
  return STATUS_DESCRIPTIONS[status] ?? "Response";
}
