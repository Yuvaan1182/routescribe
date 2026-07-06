import { ErrorExample } from "./error-example.interface";
import { Example } from "./example.interface";

export interface ExampleStore {
  latest?: Example;
  success?: Example;
  errors: ErrorExample;
}
