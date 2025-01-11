import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { programType } from "../../lib/types";
import style from "../Program/program.module.css";

function ProgramsDetails() {
  const [program, setProgram] = useState<programType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3310/api/programs/${id}`)
      .then((response) => response.json())
      .then((data) => setProgram(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!program) {
    return <p>Chargement des détails du programme...</p>;
  }
  return (
    <>
      <button type="button" className={style.buttonAddProgram}>
        <Link to="/programs/new">Ajouter votre programme</Link>
      </button>
      <div className={style.programContainer}>
        <section className={style.cardSerie}>
          <img
            src={program.poster}
            alt={`affiche de la serie ${program.title}`}
            className={style.imgSerie}
          />
          <h2 className={style.titleSerie}>{program.title}</h2>
          <p className={style.storySerie}>{program.synopsis}</p>
          <p className={style.originSerie}>
            Pays d'origine : {program.country}
          </p>
          <p className={style.yearSerie}>
            Année de production : {program.year}
          </p>
          <button type="button">
            <Link to={`/programs/${program.id}/edit`}>Modifier</Link>
          </button>
        </section>
      </div>
    </>
  );
}

export default ProgramsDetails;
