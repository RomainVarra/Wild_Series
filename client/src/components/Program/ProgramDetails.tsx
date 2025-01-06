import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type ProgramType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

function ProgramDetails() {
  const { id } = useParams();
  const [program, setProgram] = useState<ProgramType | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: ProgramType) => {
        setProgram(data);
      });
  }, [id]);

  return (
    <>
      <h2>{program?.title}</h2>
      <img src={program?.poster} alt={`Poster de ${program?.title}`} />
    </>
  );
}

export default ProgramDetails;
