# RouteScribe

> Runtime API Intelligence for Express.

Automatically discover your Express APIs from real traffic and generate accurate OpenAPI documentation with zero annotations.



## Why Routescribe?
> Most API documentation tools require manually maintaining annotations or OpenAPI files.

> RouteScribe takes a different approach.

> It observes your application at runtime, discovers your API from real requests, and generates OpenAPI documentation automatically.

- No decorators.
- No annotations.
- No duplicated documentation.


## Features

- Runtime endpoint discovery
- OpenAPI 3.1 generation
- Request & response schema inference
- Path and query parameter detection
- JSON & YAML output
- Express middleware
- Zero configuration



### Coming Soon

- API Diff
- Sequence diagrams
- Markdown documentation
- Security analysis
- AI insights


## Installation
npm install routescribe



## QuickStart
import express from "express";
import { createRouteScribe } from "routescribe";

const app = express();

app.use(express.json());

app.use(createRouteScribe().middleware());

app.get("/hello", (req, res) => {
  res.json({
    message: "Hello RouteScribe"
  });
});



### Commands
> routescribe init
Generates config file.

> routescribe generate
Generates your openapi json and yaml files.



## Genearted Output
.routescribe/
    - endpoints.json
    - openapi.json
    - openapi.yaml



## CLI
| Command                | Description            |
| ---------------------- | ---------------------- |
| `routescribe init`     | Initialize RouteScribe |
| `routescribe generate` | Generate OpenAPI       |



### Configuration
module.exports = {
    title: "My API",
    version: "1.0.0",
    output: ".routescribe"
};



## Roadmap

- Runtime API discovery
- OpenAPI generation
- API diff
- Markdown documentation
- Sequence diagrams
- Runtime API intelligence



## Contributing
Contributions are welcome!

Please open an issue before making major changes.



# Licence
MIT