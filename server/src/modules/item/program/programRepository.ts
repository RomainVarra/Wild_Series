import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

class ProgramRepository {
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await databaseClient.query<Rows>(
      `
      select * from category where id = ?
      `,
      [id],
    );

    return rows[0] as Program;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from program");

    return rows as Program[];
  }

  async update(program: Program) {
    const [result] = await databaseClient.query<Result>(
      `UPDATE program 
       SET title = ?, synopsis = ?, poster = ?, country = ?, year = ?, category_id = ?
       WHERE id = ?`,
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
        program.category_id,
        program.id,
      ],
    );

    return result.affectedRows;
  }
  async create(program: Omit<Program, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO program (title, synopsis, poster, country, year, category_id) VALUES (?, ?, ?, ?, ?, ?)",
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
        program.category_id,
      ],
    );

    return result.insertId;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from program where id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new ProgramRepository();
