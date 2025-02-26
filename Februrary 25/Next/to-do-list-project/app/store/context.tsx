"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
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

    useEffect(() => {
        async function fetchMissions() {
            try {
                const response = await fetch("http://localhost:4000/missions");
                if (!response.ok) {
                    throw new Error("Failed to fetch missions");
                }
                const data: Mission[] = await response.json();
                setMissions(data);
            } catch (error) {
                console.error("Error fetching missions:", error);
            }
        }

        fetchMissions();
    }, []);

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
