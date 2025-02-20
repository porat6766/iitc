"use client";

import React, { useState } from "react";
import { Mission } from "../types/mission";
import { useListToDo } from "../store/context";

const AddMission = () => {
    const { missions, setMissions } = useListToDo();
    const [content, setContent] = useState("");

    const handleAddMission = () => {
        if (content.trim() !== "") {
            const newMission: Mission = { content };
            setMissions([...missions, newMission]);
            setContent("");
        }
    };

    const isDisabled = content.trim() === "";

    return (
        <div className="bg-blue-900 mt-10 max-w-md mx-auto p-8 e shadow rounded-md">
            <h2 className="text-white text-2xl font-semibold mb-4">Add Task</h2>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter task..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="flex-grow border border-gray-300 rounded px-3 py-2"
                />
                <button
                    onClick={handleAddMission}
                    disabled={isDisabled}
                    className={`px-4 py-2 rounded transition ${isDisabled
                        ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default AddMission;
