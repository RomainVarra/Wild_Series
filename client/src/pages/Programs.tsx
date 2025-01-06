import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../components/Program/program.module.css";
import type { programType } from "../lib/types";

function Programs() {
  const [program, setProgram] = useState<programType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setProgram(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <button type="button" className={style.buttonAddProgram}>
        <Link to={"/programs/new"}>Ajouter votre programme</Link>
      </button>
      <div className={style.programContainer}>
        {program.map((p) => (
          <section key={p.id} className={style.cardSerie}>
            <img
              src={p.poster}
              alt={`affiche de la serie ${p.title}`}
              className={style.imgSerie}
            />
            <h2 className={style.titleSerie}>{p.title}</h2>
            <p className={style.storySerie}>{p.synopsis}</p>
            <p className={style.originSerie}> Pays d'origine : {p.country}</p>
            <p className={style.yearSerie}>Année de production : {p.year}</p>
            <button type="button">
              <Link to={`/programs/${p.id}`}>Modifier</Link>
            </button>
          </section>
        ))}
      </div>
    </>
  );
}

export default Programs;
