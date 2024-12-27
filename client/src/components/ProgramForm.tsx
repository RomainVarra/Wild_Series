import type { ReactNode } from "react";

type ProgramData = {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

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
      <div>
        <label>
          Title:
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
          Synopsis:
          <textarea
            name="synopsis"
            defaultValue={defaultValue.synopsis}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Poster URL:
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
          Country:
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
          Year:
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
          Category ID:
          <input
            type="number"
            name="category_id"
            defaultValue={defaultValue.category_id}
            required
          />
        </label>
      </div>
      <button type="submit">{children}</button>
    </form>
  );
}

export default ProgramForm;
