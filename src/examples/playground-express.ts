import express from "express";
import { createRouteScribe } from "../route-scribe";
import { DEFAULT_OUTPUT_DIRECTORY } from "../constants/constants";

async function main() {
  const app = express();

  app.use(express.json());

  const routeScribe = createRouteScribe({
    output: DEFAULT_OUTPUT_DIRECTORY,
    ignore: ["/debug", "/health", "/metrics"],
  });

  app.use(routeScribe.middleware());

  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

  app.get("/hello", (req, res) => {
    res.json({
      message: "Hello RouteScribe!",
    });
  });

  app.post("/login", (req, res) => {
    res.status(201).json({
      token: "abc123",
      user: req.body,
    });
  });

  app.get("/users/:id", (req, res) => {
    res.json({
      id: req.params.id,
      active: req.query.active,
    });
  });

  app.get("/debug", async (req, res) => {
    res.json(await routeScribe.getEndpoints());
  });

  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}

main().catch(console.error);
