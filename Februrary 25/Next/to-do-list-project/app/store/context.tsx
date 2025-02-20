"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Mission } from "../types/mission";

interface ContextType {
    missions: Mission[];
    setMissions: React.Dispatch<React.SetStateAction<Mission[]>>;
}

const ListToDo = createContext<ContextType | undefined>(undefined);

interface MyProviderProps {
    children: ReactNode;
}

export function MyProvider({ children }: MyProviderProps) {
    const [missions, setMissions] = useState<Mission[]>([]);

    return (
        <ListToDo.Provider value={{ missions, setMissions }}>
            {children}
        </ListToDo.Provider>
    );
}

export function useListToDo() {
    const context = useContext(ListToDo);
    if (!context) {
        throw new Error("useListToDo must be used within a MyProvider");
    }
    return context;
}
