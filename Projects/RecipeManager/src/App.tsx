import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home-page/Home-page.tsx";
import Profile from "./Pages/Profile/Profile.tsx";
import Recipes from "./Pages/Recipes/Recipes.tsx";
import Article from "./Pages/Article/Article.tsx";
import { AuthProvider } from "./Components/recipes-provider/context.tsx";
import OneRecipe from "./Pages/OneRecipe/OneRecipe.tsx";

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  image: string;
  tags: string[];
  mealTime: "Breakfast" | "Lunch" | "Dinner";
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Article />,
      children: [
        {
          path: "/",
          element: (
            <AuthProvider>
              <HomePage />
            </AuthProvider>
          ),
        },
        {
          path: "recipes",
          element: (
            <AuthProvider>
              <Recipes />
            </AuthProvider>
          ),
        },
        {
          path: "recipes/:id",
          element: (
            <AuthProvider>
              <OneRecipe />
            </AuthProvider>
          ),
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
