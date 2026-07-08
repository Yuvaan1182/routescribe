const express = require("express");
const { createRouteScribe } = require("routescribe");

const app = express();

app.use(express.json());

app.use(createRouteScribe().middleware());

app.get("/hello", (req, res) => {
  res.json({
    message: "Hello RouteScribe!",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
