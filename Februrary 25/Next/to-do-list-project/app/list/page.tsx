"use client";

import React from "react";
import { useListToDo } from "../store/context";

const List = () => {
    const { missions, setMissions } = useListToDo();


    const toggleCompletion = (index: number) => {
        setMissions(
            missions.map((mission, i) =>
                i === index
                    ? { ...mission, completed: !mission.completed }
                    : mission
            )
        );
    };


    const deleteMission = (index: number) => {
        setMissions(missions.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-md mx-auto p-4">
            {missions.length > 0 ? (
                <ul className="list-none">
                    {missions.map((mission, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between p-2 border-b border-gray-300 hover:bg-gray-100 transition"
                        >
                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    checked={mission.completed || false}
                                    onChange={() => toggleCompletion(index)}
                                    className="h-5 w-5 text-blue-600"
                                />
                                <span
                                    className={`text-lg ${mission.completed ? "line-through text-gray-500" : ""
                                        }`}
                                >
                                    {mission.content}
                                </span>
                            </div>
                            <button
                                onClick={() => deleteMission(index)}
                                className="text-red-500 hover:text-red-700 transition"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-white text-xl bg-blue-900 text-center rounded p-6">No tasks added yet!</p>
            )}
        </div>
    );
};

export default List;
