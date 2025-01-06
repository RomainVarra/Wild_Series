import type { ReactNode } from "react";
import type { ProgramData } from "../../lib/types";
import style from "./program.module.css";

interface ProgramFormProps {
  children: ReactNode;
  defaultValue: ProgramData;
  onSubmit: (program: ProgramData) => void;
}

function ProgramForm({ children, defaultValue, onSubmit }: ProgramFormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);

        const programData: ProgramData = {
          title: formData.get("title") as string,
          synopsis: formData.get("synopsis") as string,
          poster: formData.get("poster") as string,
          country: formData.get("country") as string,
          year: Number.parseInt(formData.get("year") as string),
          category_id: Number.parseInt(formData.get("category_id") as string),
        };

        onSubmit(programData);
      }}
    >
      <section className={style.programForm}>
        <div>
          <label>
            Titre :
            <input
              type="text"
              name="title"
              defaultValue={defaultValue.title}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Synopsis :
            <textarea
              name="synopsis"
              defaultValue={defaultValue.synopsis}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Poster :
            <input
              type="text"
              name="poster"
              defaultValue={defaultValue.poster}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Pays d'origine :
            <input
              type="text"
              name="country"
              defaultValue={defaultValue.country}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Année de sortie :
            <input
              type="number"
              name="year"
              defaultValue={defaultValue.year}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Catégorie :
            <input
              type="number"
              name="category_id"
              defaultValue={defaultValue.category_id}
            />
          </label>
        </div>
        <button className={style.formButton} type="submit">
          {children}
        </button>
      </section>
    </form>
  );
}

export default ProgramForm;
