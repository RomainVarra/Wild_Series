import { useEffect, useState } from "react";
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
          </section>
        ))}
      </div>
    </>
  );
}

export default Programs;
