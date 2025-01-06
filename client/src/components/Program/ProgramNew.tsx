import { useNavigate } from "react-router-dom";

import ProgramForm from "./ProgramForm";

type programType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};
function ProgramNew() {
  const navigate = useNavigate();

  const newProgram: programType = {
    id: Number(""),
    title: "",
    synopsis: "",
    poster: "",
    country: "",
    year: Number(""),
    category_id: Number(""),
  };

  return (
    <ProgramForm
      defaultValue={newProgram}
      onSubmit={(programData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/programs`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(programData),
        })
          .then((response) => response.json())
          .then((data) => {
            navigate(`/programs/${data.insertId}`);
          });
      }}
    >
      Ajouter
    </ProgramForm>
  );
}

export default ProgramNew;
