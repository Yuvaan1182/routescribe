export interface Request {
  headers: Record<string, string>;

  params: Record<string, unknown>;

  query: Record<string, unknown>;

  body: unknown;
}
