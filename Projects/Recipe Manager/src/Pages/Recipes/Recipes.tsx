import { useAuth } from "../../Components/recipes-provider/context.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Recipe } from "@/App.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import EditAndDeleteDialog from "@/Components/EditAndDeleteDialog.tsx";
import AddRecipe from "@/Components/AddRecipe.tsx";
import { Input } from "@/Components/ui/input.tsx";

function Recipes() {
  const { recipes } = useAuth();
  const [recipesRender, setRecipesRender] = useState<Recipe[]>([]);
  const [filterMealTime, setFilterMealTime] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setRecipesRender(recipes);
  }, [recipes]);

  useEffect(() => {
    if (filterMealTime === "All" || filterMealTime === "") {
      setRecipesRender(recipes);
    } else {
      setRecipesRender(
        recipes.filter(
          (rec) => rec.mealTime.toLowerCase() === filterMealTime.toLowerCase()
        )
      );
    }
  }, [filterMealTime, recipes]);

  const handleNavigate = (id: string) => {
    navigate(`/Recipes/${id}`);
  };

  useEffect(() => {
    setRecipesRender(recipes);
    handleSearch();
  }, [searchInput]);

  const handleSearch = () => {
    if (searchInput === "") {
      setRecipesRender(recipes);
    }
    setRecipesRender((prev) =>
      prev.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          recipe.name.toLowerCase().startsWith(searchInput.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div className="flex bg-redSideBar gap-5 p-2">
        <Select
          value={filterMealTime}
          onValueChange={(value) => setFilterMealTime(value)}
        >
          <SelectTrigger className="w-[280px] bg-white">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Meal time</SelectLabel>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Breakfast">Breakfast</SelectItem>
              <SelectItem value="Lunch">Lunch</SelectItem>
              <SelectItem value="Dinner">Dinner</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <AddRecipe setRecipesRender={setRecipesRender} />
        <Input
          onChange={(ev) => setSearchInput(ev.target.value)}
          className="bg-white text-black"
          placeholder="Search recipe..."
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {recipesRender.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-lg shadow-red-500 rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleNavigate(recipe.id)}
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.name}</h2>
              <p className="text-gray-500 text-sm">{recipe.description}</p>
              <EditAndDeleteDialog
                setRecipesRender={setRecipesRender}
                recipe={recipe}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
