import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type ProgramsType = {
  id: number;
  title: string;
  poster: string;
  country: string;
  year: number;
};

function ProgramIndex() {
  const [programs, setPrograms] = useState([] as ProgramsType[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data: ProgramsType[]) => {
        setPrograms(data);
      });
  }, []);

  return (
    <>
      <Link to={"/programs/new"}>Ajouter</Link>
      <ul>
        {programs.map((p) => (
          <li key={p.id}>
            <Link to={`/programs/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProgramIndex;
