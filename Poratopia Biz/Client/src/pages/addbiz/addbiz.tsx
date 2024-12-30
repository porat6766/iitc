import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addBusinessApi } from "../../services/businessService.tsx";
import BusinessForm from "../../components/FormBiz/FormBiz.tsx";
import { useEffect, useState } from "react";
import { checkAuth } from "@/App.tsx";

const AddBiz = ({ setIsLogIn }: { setIsLogIn: any }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const funCheck = async () => {
      const check = await checkAuth(setIsLogIn);
      console.log(check);

      if (!check) {
        navigate("/login");
      }
    };
    funCheck();
  }, []);

  const mutation = useMutation({
    mutationFn: (newBusiness: any) => addBusinessApi(newBusiness),
    onSuccess: () => {
      navigate("/businesses");
    },
    onError: (err: any) => {
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
    <div className="h-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="w-full p-10 bg-gray-800 rounded-lg shadow-xl shadow-gray-800">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-6">
          Add New Business
        </h1>
        {errorMessage && (
          <div className="mb-4 p-4 text-center text-red-500 bg-gray-700 rounded-lg shadow-md">
            <p className="font-semibold">{errorMessage}</p>
            <p className="mt-2 text-sm text-gray-300">
              Please go to your profile and change your plan.
            </p>
          </div>
        )}
        <BusinessForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddBiz;
