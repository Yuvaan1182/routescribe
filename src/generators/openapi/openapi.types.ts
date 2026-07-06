export interface OpenApiDocument {
  openapi: string;

  info: OpenApiInfo;

  paths: Record<string, OpenApiPathItem>;
}

export interface OpenApiInfo {
  title: string;
  version: string;
  description?: string;
}

export interface OpenApiPathItem {
  get?: OpenApiOperation;
  post?: OpenApiOperation;
  put?: OpenApiOperation;
  patch?: OpenApiOperation;
  delete?: OpenApiOperation;
}

export interface OpenApiOperation {
  summary?: string;

  parameters?: OpenApiParameter[];

  requestBody?: OpenApiRequestBody;

  responses: Record<string, OpenApiResponse>;
}

export interface OpenApiResponse {
  description: string;
  content?: OpenApiContent;
}

export interface OpenApiMediaType {
  schema?: OpenApiSchema;
  example?: unknown;
}

export interface OpenApiContent {
  "application/json": OpenApiMediaType;
}

export interface OpenApiSchema {
  type: string;

  properties?: Record<string, OpenApiSchema>;

  required?: string[];

  items?: OpenApiSchema;
}

export interface OpenApiRequestBody {
  required: boolean;

  content: OpenApiContent;
}

export interface OpenApiParameter {
  name: string;

  in: "path" | "query";

  required: boolean;

  schema: OpenApiSchema;

  example?: unknown;
}

export interface GenerateOpenApiResult {
  document: OpenApiDocument;
  files: string[];
}

export interface GenerateOpenApiOptions {
  output?: string;

  title: string;

  version: string;

  writeJson?: boolean;

  writeYaml?: boolean;
}
