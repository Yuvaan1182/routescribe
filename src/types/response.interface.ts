export interface Response {
  status: number;
  headers: Record<string, string>;
  body: unknown;
}
