import categoryRepository from "./categoryRepository";

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

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  res.json(categoriesFromDB);
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
