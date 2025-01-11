import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../components/Category/category.module.css";
import type { Category } from "../lib/types";

function CategoryIndex() {
  const [categories, setCategories] = useState([] as Category[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories`)
      .then((response) => response.json())
      .then((data: Category[]) => {
        setCategories(data);
      });
  }, []);

  return (
    <>
      <button className={style.newCategory} type="button">
        <Link to={"/categories/new"}>Ajouter une catégorie</Link>
      </button>
      <ul className={style.listCategory}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoryIndex;
