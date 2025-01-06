import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Category } from "../../lib/types";
import CategoryDeleteForm from "./CategoryDeleteForm";

function CategoryDetail() {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_API_URL}/api/categories/${id}`)
        .then((response) => response.json())
        .then((data: Category) => {
          setCategory(data);
        })
        .catch((error) => console.error("Erreur lors du chargement :", error));
    }
  }, [id]);

  return (
    category && (
      <>
        <h1>{category.name}</h1>
        <Link to={`/categories/${category.id}/edit`}>Modifier</Link>
        <CategoryDeleteForm id={category.id}>Supprimer</CategoryDeleteForm>
      </>
    )
  );
}

export default CategoryDetail;
