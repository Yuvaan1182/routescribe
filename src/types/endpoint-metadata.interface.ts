import { AuthenticationMetadata } from "./auth-metadata.interface";

export interface EndpointMetadata {
  summary?: string;
  description?: string;
  tags?: string[];
  deprecated?: boolean;
  authentication?: AuthenticationMetadata;
}
