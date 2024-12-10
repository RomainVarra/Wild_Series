import { useEffect, useState } from "react";

type programType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

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
      {program.map((p) => (
        <section key={p.id}>
          <h1>{p.title}</h1>
          <p>{p.synopsis}</p>
          <p> Pays d'origine : {p.country}</p>
          <p>Année de production : {p.year}</p>
          <img src={p.poster} alt={`affiche de la serie ${p.title}`} />
        </section>
      ))}
    </>
  );
}

export default Programs;
