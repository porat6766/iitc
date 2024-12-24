import { Button } from "@/Components/ui/button";
import { useAuth } from "../Components/recipes-provider/context.tsx";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Recipe } from "@/App.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { apiResipe } from "../api/api.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";

export default function EditAndDeleteDialog({ recipe, setRecipesRender }) {
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const ingredientsRef = useRef<HTMLTextAreaElement>(null);
  const stepsRef = useRef<HTMLTextAreaElement>(null);
  const prepTimeRef = useRef<HTMLInputElement>(null);
  const cookTimeRef = useRef<HTMLInputElement>(null);
  const servingsRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const tagsRef = useRef<HTMLInputElement>(null);
  const [mealTimeState, setMealTimeState] = useState<
    "Breakfast" | "Lunch" | "Dinner"
  >("Breakfast");
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async (id: string) => {
    const res = await apiResipe.delete(`/Recipes/${id}`);
    if (res.data) {
      setRecipesRender((prev) => prev.filter((rec) => rec.id !== id));
    }
  };

  const handleDeleteClick = () => {
    handleDelete(recipe.id);
  };

  const editRecipe = (recipeId: string) => {
    const updatedRecipe: Omit<Recipe, "id"> = {
      name: nameRef.current?.value || "",
      description: descriptionRef.current?.value || "",
      ingredients: ingredientsRef.current?.value.split(",") || [],
      steps: stepsRef.current?.value.split(",") || [],
      prepTime: parseInt(prepTimeRef.current?.value || "0", 10),
      cookTime: parseInt(cookTimeRef.current?.value || "0", 10),
      servings: parseInt(servingsRef.current?.value || "0", 10),
      image: imageRef.current?.value || "",
      tags: tagsRef.current?.value.split(",") || [],
      mealTime: mealTimeState || "",
    };

    const missingFields = [];
    for (const field in updatedRecipe) {
      if (
        (Array.isArray(updatedRecipe[field]) &&
          updatedRecipe[field].length === 0) ||
        (typeof updatedRecipe[field] === "string" &&
          updatedRecipe[field].trim() === "") ||
        updatedRecipe[field] === 0
      ) {
        missingFields.push(field);
      }
    }

    if (missingFields.length > 0) {
      alert(`you miss a field: ${missingFields.join(", ")}`);
      return;
    }

    apiResipe
      .put(`/Recipes/${recipeId}`, updatedRecipe)
      .then((res) => {
        alert("Recipe updated successfully!");
        setRecipesRender((prev) =>
          prev.map((recipe) =>
            recipe.id === recipeId ? { ...recipe, ...res.data } : recipe
          )
        );
        setIsOpen(false);
      })
      .catch((error) => {
        console.error("Failed to update recipe:", error);
      });
  };

  return (
    <div className="flex justify-end gap-2 mt-4">
      <Dialog>
        <DialogTrigger onClick={(ev) => ev.stopPropagation()} asChild>
          <Button variant="outline" onClick={() => setOkToDelete(false)}>
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] mt-7">
          <DialogHeader>
            <DialogTitle>Remove Recipe</DialogTitle>
            <DialogDescription asChild>
              <Button
                className="bg-red-700 p-3 rounded-sm mt-3 text-white cursor-pointer"
                onClick={(ev) => {
                  ev.stopPropagation();
                  handleDeleteClick();
                }}
              >
                Are you sure??
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={(e) => e.stopPropagation()}>
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent
          onClick={(e) => e.stopPropagation()}
          className="sm:max-w-[425px] mt-7"
        >
          <DialogHeader>
            <DialogTitle>Edit Recipe</DialogTitle>
          </DialogHeader>
          <form
            id={`edit-recipe-form-${recipe.id}`}
            className="grid gap-1 py-4"
          >
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-name" className="text-right">
                Name
              </Label>
              <Input
                id="edit-name"
                name="name"
                defaultValue={recipe.name}
                ref={nameRef}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-description" className="text-right">
                Description
              </Label>
              <Input
                id="edit-description"
                name="description"
                defaultValue={recipe.description}
                ref={descriptionRef}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-ingredients" className="text-right">
                Ingredients
              </Label>
              <Input
                id="edit-ingredients"
                name="ingredients"
                defaultValue={recipe.ingredients.join(", ")}
                ref={ingredientsRef}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-steps" className="text-right">
                Steps
              </Label>
              <Input
                id="edit-steps"
                name="steps"
                defaultValue={recipe.steps.join(", ")}
                ref={stepsRef}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-prep-time" className="text-right">
                Prep Time (minutes)
              </Label>
              <Input
                id="edit-prep-time"
                name="prepTime"
                type="number"
                defaultValue={recipe.prepTime}
                ref={prepTimeRef}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-cook-time" className="text-right">
                Cook Time (minutes)
              </Label>
              <Input
                id="edit-cook-time"
                name="cookTime"
                type="number"
                defaultValue={recipe.cookTime}
                ref={cookTimeRef}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-servings" className="text-right">
                Servings
              </Label>
              <Input
                id="edit-servings"
                name="servings"
                type="number"
                defaultValue={recipe.servings}
                ref={servingsRef}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-image" className="text-right">
                Image URL
              </Label>
              <Input
                id="edit-image"
                name="image"
                defaultValue={recipe.image}
                ref={imageRef}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-tags" className="text-right">
                Tags
              </Label>
              <Input
                id="edit-tags"
                name="tags"
                defaultValue={recipe.tags.join(", ")}
                ref={tagsRef}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-meal-time" className="text-right">
                Meal Time
              </Label>
              <Select value={mealTimeState} onValueChange={setMealTimeState}>
                <SelectTrigger>
                  <SelectValue placeholder="Select meal time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Breakfast">Breakfast</SelectItem>
                    <SelectItem value="Lunch">Lunch</SelectItem>
                    <SelectItem value="Dinner">Dinner</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </form>
          <DialogFooter>
            <Button
              onClick={() => editRecipe(recipe.id)}
              className="text-white bg-blue-500"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
