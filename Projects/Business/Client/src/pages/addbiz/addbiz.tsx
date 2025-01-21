import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addBusinessApi } from "../../services/businessService.tsx";
import BusinessForm from "../../components/FormBiz/FormBiz.tsx";
import { useEffect, useState } from "react";

const AddBiz = ({ isLogIn }: { isLogIn: boolean }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (!isLogIn) {
        navigate("/login");
      }
    }, 1000);
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
      const error =
        err?.response?.data?.message || "An unexpected error occurred";
      setErrorMessage(error);
    },
  });

  const handleSubmit = (newBusiness: {
    name: string;
    description: string;
    category: string;
  }) => {
    setErrorMessage(null);
    mutation.mutate(newBusiness);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center">
      <header className="w-full text-center py-6">
        <h1 className="text-4xl font-semibold text-white">
          Add New Business to <span className="text-blue-400">Poratopia</span>
        </h1>
      </header>

      <section className="text-center max-w-3xl px-6 mt-8">
        <p className="text-lg leading-relaxed text-gray-300">
          Fill out the form below to add a new business to your profile.
        </p>
      </section>

      <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-2xl shadow-gray-900 mt-8">
        {errorMessage && (
          <div className="mb-6 p-4 text-center text-red-500 bg-gray-700 rounded-lg shadow-md">
            <p className="font-semibold">{errorMessage}</p>
            <p className="mt-2 text-sm text-gray-300">
              Please check your business information and try again.
            </p>
          </div>
        )}

        <BusinessForm onSubmit={handleSubmit} />

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/businesses")}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-md transition-all duration-300"
          >
            Back to Businesses
          </button>
        </div>
      </div>

      <footer className="w-full text-center mt-16 py-6 bg-gray-800">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Poratopia. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AddBiz;
