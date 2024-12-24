import { createContext, useEffect, useState, useContext } from "react";
import { apiResipe } from "../../api/api.tsx";
import { Recipe } from "../../App.tsx";

interface AuthContextType {
  recipes: Recipe[];
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiResipe.get("/Recipes");
        console.log(data);
        setRecipes(data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ recipes }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
