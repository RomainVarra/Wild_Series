import type { CategoryDeleteFormProps } from "../../lib/types";

function CategoryDeleteForm({ children, id }: CategoryDeleteFormProps) {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/categories/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Échec de la suppression");
      }

      alert("Série supprimée");
      window.location.href = "/categories";
    } catch (error) {
      console.error(error);
      alert("Une erreur s'est produite lors de la suppression");
    }
  };

  return (
    <button type="button" onClick={handleDelete}>
      {children}
    </button>
  );
}

export default CategoryDeleteForm;
