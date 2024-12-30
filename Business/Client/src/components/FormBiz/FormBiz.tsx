import React, { useState } from "react";

const BusinessForm = ({
  business,
  onSubmit,
}: {
  business?: { name: string; description: string; category: string };
  onSubmit: (newBusiness: {
    name: string;
    description: string;
    category: string;
  }) => void;
}) => {
  const [name, setName] = useState(business?.name || "");
  const [description, setDescription] = useState(business?.description || "");
  const [category, setCategory] = useState(business?.category || "");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !description || !category) {
      setError("All fields are required!");
      return;
    }

    const newBusiness = { name, description, category };
    onSubmit(newBusiness);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 flex flex-col gap-8 p-10 bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 rounded-lg shadow-lg"
    >
      <div className="form-group">
        <label
          htmlFor="name"
          className="block text-lg font-medium text-blue-400"
        >
          Business Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter business name"
          className="w-full p-3 mt-2 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label
          htmlFor="description"
          className="block text-lg font-medium text-blue-400"
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter business description"
          className="w-full p-3 mt-2 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label
          htmlFor="category"
          className="block text-lg font-medium text-blue-400"
        >
          Category:
        </label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Enter business category"
          className="w-full p-3 mt-2 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
      >
        {business ? "Update Business" : "Add Business"}
      </button>

      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </form>
  );
};

export default BusinessForm;
