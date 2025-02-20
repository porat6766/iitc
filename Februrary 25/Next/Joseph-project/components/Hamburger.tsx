"use client";

import React, { useState } from "react";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                className="lg:hidden absolute top-4 right-4 p-2 cursor-pointer"
                onClick={toggleMenu}
            >
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
            </button>

            <div
                className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 ${isOpen ? "block" : "hidden"}`}
            >
                <div className="absolute top-0 right-0 p-4">
                    <button onClick={toggleMenu} className="text-white text-xl">
                        X
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center h-full text-white">
                    <a href="#home" className="py-2 text-xl">עמוד ראשי</a>
                    <a href="#about" className="py-2 text-xl">קצת עליי</a>
                    <a href="#services" className="py-2 text-xl">שירותי המשרד</a>
                    <a href="#blog" className="py-2 text-xl">בלוג</a>
                    <a href="#articles" className="py-2 text-xl">כתבות</a>
                    <a href="#contact" className="py-2 text-xl">צור קשר</a>
                </div>
            </div>

            <div className="hidden lg:flex justify-between items-center bg-gray-800 text-white p-4">
                <div className="text-2xl">Logo</div>
                <div className="space-x-4">
                    <a href="#home">עמוד ראשי</a>
                    <a href="#about">קצת עליי</a>
                    <a href="#services">שירותי המשרד</a>
                    <a href="#blog">בלוג</a>
                    <a href="#articles">כתבות</a>
                    <a href="#contact">צור קשר</a>
                </div>
            </div>
        </div>
    );
};

export default Hamburger;
