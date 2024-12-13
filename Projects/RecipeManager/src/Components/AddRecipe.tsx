import { useAuth } from "../Db/context.tsx";
import { Button } from "@/Components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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

export default function AddRecipe({ setRecipesRender }) {
  const [isDialogAddgOpen, setIsDialogAddOpen] = useState(false);
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

  const addResipe = () => {
    const newRecipe: Omit<Recipe, "id"> = {
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
    for (const field in newRecipe) {
      if (
        (Array.isArray(newRecipe[field]) && newRecipe[field].length === 0) ||
        (typeof newRecipe[field] === "string" &&
          newRecipe[field].trim() === "") ||
        newRecipe[field] === 0
      ) {
        missingFields.push(field);
      }
    }

    if (missingFields.length > 0) {
      alert(`you miss a field: ${missingFields.join(", ")}`);
      return;
    }

    apiResipe
      .post("/Recipes", newRecipe)
      .then((res) => {
        alert("Recipe added successfully!");
        setRecipesRender((prev) => [...prev, res.data]);
        setIsDialogAddOpen(false);
      })
      .catch((error) => {
        console.error("Failed to add recipe:", error);
      });
  };

  return (
    <div>
      <Dialog open={isDialogAddgOpen} onOpenChange={setIsDialogAddOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add New Recipe</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] mt-12 w-full">
          <DialogHeader>
            <DialogTitle>Add New Recipe</DialogTitle>
            <DialogDescription>
              Fill in the details of the new recipe. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <form id="add-recipe-form" className="grid gap-1 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                ref={nameRef}
                placeholder="Recipe Name"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                ref={descriptionRef}
                placeholder="Short description of the recipe"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="ingredients" className="text-right">
                Ingredients
              </Label>
              <textarea
                id="ingredients"
                ref={ingredientsRef}
                placeholder="Enter ingredients, separated by commas"
                className="col-span-3 border p-2 rounded"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="steps" className="text-right">
                Steps
              </Label>
              <textarea
                id="steps"
                ref={stepsRef}
                placeholder="Enter steps, separated by commas"
                className="col-span-3 border p-2 rounded"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="prepTime" className="text-right">
                Prep Time (mins)
              </Label>
              <Input
                id="prepTime"
                ref={prepTimeRef}
                type="number"
                placeholder="Preparation time in minutes"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cookTime" className="text-right">
                Cook Time (mins)
              </Label>
              <Input
                id="cookTime"
                ref={cookTimeRef}
                type="number"
                placeholder="Cooking time in minutes"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="servings" className="text-right">
                Servings
              </Label>
              <Input
                id="servings"
                ref={servingsRef}
                type="number"
                placeholder="Number of servings"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image URL
              </Label>
              <Input
                id="image"
                ref={imageRef}
                placeholder="URL of the recipe image"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tags" className="text-right">
                Tags
              </Label>
              <Input
                id="tags"
                ref={tagsRef}
                placeholder="Enter tags, separated by commas"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="mealTime" className="text-right">
                Meal Time
              </Label>
              <Select value={mealTimeState} onValueChange={setMealTimeState}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select Meal Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem className="cursor-pointer" value="Breakfast">
                      Breakfast
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="Lunch">
                      Lunch
                    </SelectItem>
                    <SelectItem className="cursor-pointer" value="Dinner">
                      Dinner
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <DialogFooter className="flex justify-center mt-2 mx-40">
              <Button onClick={addResipe} type="button" form="add-recipe-form">
                Add Recipe
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
