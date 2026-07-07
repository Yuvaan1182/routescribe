import { inferSchema } from "../schema";

console.dir(inferSchema("hello"), {
  depth: null,
});

console.dir(inferSchema(42), {
  depth: null,
});

console.dir(inferSchema(3.14), {
  depth: null,
});

console.dir(inferSchema(true), {
  depth: null,
});

console.dir(inferSchema(null), {
  depth: null,
});

console.dir(
  inferSchema({
    name: "John",
    age: 25,
    active: true,
  }),
  { depth: null },
);

console.dir(
  inferSchema({
    user: {
      id: 1,
      email: "john@example.com",
    },
  }),
  {
    depth: null,
  },
);

console.dir(inferSchema(["admin", "editor", "viewer"]), {
  depth: null,
});

console.dir(inferSchema([1, 2, 3]), {
  depth: null,
});

console.dir(
  inferSchema([
    {
      id: 1,
      email: "john@example.com",
    },
  ]),
  {
    depth: null,
  },
);
