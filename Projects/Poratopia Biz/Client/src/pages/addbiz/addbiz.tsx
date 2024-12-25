// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";
// import { addBusinessApi } from "../../services/businessService.tsx"; // Assuming this function sends POST request to API

// const AddBiz = ({ isLogIn }: { isLogIn: boolean }) => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLogIn) {
//       navigate("/login");
//     }
//   }, [isLogIn, navigate]);

//   const mutation = useMutation({
//     mutationFn: (newBusiness: {
//       name: string;
//       description: string;
//       category: string;
//     }) => addBusinessApi(newBusiness),
//     onSuccess: () => {
//       navigate("/businesses");
//     },
//     onError: (err) => {
//       setError(
//         "Error adding business: " +
//           (err instanceof Error ? err.message : "Unknown error")
//       );
//     },
//   });

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!name || !description || !category) {
//       setError("All fields are required!");
//       return;
//     }

//     const newBusiness = {
//       name,
//       description,
//       category,
//     };

//     try {
//       await mutation.mutateAsync(newBusiness);
//     } catch (error) {
//       console.error("Error creating business", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
//       <div className="w-full max-w-lg p-10 bg-gray-800 rounded-lg shadow-xl shadow-gray-800">
//         <h1 className="text-4xl font-bold text-center text-orange-500 mb-6">
//           Add New Business
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="form-group">
//             <label
//               htmlFor="name"
//               className="block text-lg font-medium text-orange-400"
//             >
//               Business Name:
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter business name"
//               className="w-full p-3 mt-2 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label
//               htmlFor="description"
//               className="block text-lg font-medium text-orange-400"
//             >
//               Description:
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               placeholder="Enter business description"
//               className="w-full p-3 mt-2 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label
//               htmlFor="category"
//               className="block text-lg font-medium text-orange-400"
//             >
//               Category:
//             </label>
//             <input
//               type="text"
//               id="category"
//               name="category"
//               placeholder="Enter business category"
//               className="w-full p-3 mt-2 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500"
//             disabled={mutation.isLoading}
//           >
//             {mutation.isLoading ? "Adding Business..." : "Add Business"}
//           </button>

//           {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddBiz;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addBusinessApi } from "../../services/businessService.tsx";
import BusinessForm from "../../components/FormBiz/FormBiz.tsx"; // Import the BusinessForm component

const AddBiz = ({ isLogIn }: { isLogIn: boolean }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogIn) {
      navigate("/login");
    }
  }, [isLogIn, navigate]);

  const mutation = useMutation({
    mutationFn: (newBusiness: {
      name: string;
      description: string;
      category: string;
    }) => addBusinessApi(newBusiness),
    onSuccess: () => {
      navigate("/businesses");
    },
    onError: (err) => {
      alert(`Error: ${err.message}`);
    },
  });

  const handleSubmit = (newBusiness: {
    name: string;
    description: string;
    category: string;
  }) => {
    mutation.mutate(newBusiness);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="w-full max-w-lg p-10 bg-gray-800 rounded-lg shadow-xl shadow-gray-800">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-6">
          Add New Business
        </h1>
        <BusinessForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddBiz;
