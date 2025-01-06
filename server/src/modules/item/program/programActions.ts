import programRepository from "./programRepository";

// Declare the action

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const programsFromDB = await programRepository.readAll();

  res.json(programsFromDB);
};

const read: RequestHandler = async (req, res, next) => {
  const programId = Number(req.params.id);
  const program = await programRepository.read(programId);
  if (program == null) {
    res.sendStatus(404);
  } else {
    res.json(program);
  }
};

const editProgram: RequestHandler = async (req, res, next) => {
  try {
    const program = {
      id: Number(req.params.id),
      title: req.body.title,
      synopsis: req.body.synopsis,
      poster: req.body.poster,
      country: req.body.country,
      year: Number(req.body.year),
      category_id: Number(req.body.category_id),
    };

    const affectedRows = await programRepository.update(program);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};
const add: RequestHandler = async (req, res, next) => {
  try {
    const winTime = req.body;

    const newProgram = {
      name: winTime.name,
      id: winTime.id,
      title: winTime.title,
      synopsis: winTime.synopsis,
      poster: winTime.poster,
      country: winTime.country,
      year: winTime.year,
      category_id: winTime.category_id,
    };

    const insertId = await programRepository.create(newProgram);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};
const destroy: RequestHandler = async (req, res, next) => {
  try {
    const programId = Number(req.params.id);

    await programRepository.delete(programId);

    // Respond with HTTP 204 (No Content) anyway
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// Export it to import it somewhere else

export default { browse, read, editProgram, add, destroy };
