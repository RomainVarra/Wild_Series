const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
  {
    id: 3,
    name: "Thriller",
  },
  {
    id: 4,
    name: "Horreur",
  },
  {
    id: 5,
    name: "Policier",
  },
  {
    id: 6,
    name: "Romance",
  },
];

import type { RequestHandler } from "express";
const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredCategory = categories.filter((c) =>
      c.name.includes(req.query.q as string),
    );

    res.json(filteredCategory);
  } else {
    res.json(categories);
  }
};
const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const category = categories.find((p) => p.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
