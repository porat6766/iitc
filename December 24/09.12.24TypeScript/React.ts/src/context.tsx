import { createContext, useEffect, useState, useContext } from "react";
import { api } from "./api";

interface User {
  id: string;
  name: string;
}

interface AuthContextType {
  users: User[];
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}


export const AuthProvider = ({ children} : AuthProviderProps) => {
  const [users, setUsers] = useState<User[]>([]); 

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("users");
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
