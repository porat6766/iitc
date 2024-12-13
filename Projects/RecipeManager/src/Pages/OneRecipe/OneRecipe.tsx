import { useParams } from "react-router-dom";
import { useAuth } from "../../Db/context.tsx";
import { Button } from "@/Components/ui/button";

function RecipeDetails() {
  const { id }: any = useParams();
  const { recipes } = useAuth();

  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return <p className="text-center text-red-500">Recipe not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
          <p className="text-gray-700 text-base mb-6">{recipe.description}</p>

          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700 text-sm">
                {ingredient}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-2">Steps</h2>
          <ol className="list-decimal list-inside">
            {recipe.steps.map((step, index) => (
              <li key={index} className="text-gray-700 text-sm mb-2">
                {step}
              </li>
            ))}
          </ol>

          <div className="mt-6">
            <Button variant="outline" onClick={() => window.history.back()}>
              Back to Recipes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
