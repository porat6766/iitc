"use client";

import React from "react";

const page = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-600 via-pink-400 to-red-200 flex flex-col items-center justify-start py-12">
      <header className="w-full max-w-xl text-center mb-8">
        <h1 className="text-5xl font-bold text-pink-600 mb-4 animate-pulse">
          Super Interactive ToDo List
        </h1>
        <p className="text-xl text-gray-700">
          Organize your tasks and stay productive with ease!
        </p>
      </header>

      <footer className="mt-10">
        <p className="text-sm text-white">
          Made with ❤️ using Next.js and Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default page;
