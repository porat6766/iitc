import { createContext, useEffect, useState, useContext } from "react";
import { api } from "./api";
import { Task } from "./App";

interface AuthContextType {
  tasks: Task[];
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/tasks");
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ tasks }}>{children}</AuthContext.Provider>
  );
};
 
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
