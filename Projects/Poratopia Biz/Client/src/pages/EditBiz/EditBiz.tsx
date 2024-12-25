import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useUserProfile } from "../../hooks/useUsere.tsx";
import { editBusinessApi } from "../../services/businessService.tsx";
import BusinessForm from "../../components/FormBiz/FormBiz.tsx";

const EditBiz = ({ isLogIn }: { isLogIn: boolean }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [businessData, setBusinessData] = useState<{
    name: string;
    description: string;
    category: string;
  } | null>(null);

  const {
    data: userProfile,
    isLoading: userLoading,
    isError: userError,
  } = useUserProfile();

  useEffect(() => {
    if (!isLogIn) {
      navigate("/login");
    }
  }, [isLogIn, navigate]);

  useEffect(() => {
    if (userProfile && userProfile.savedBusinesses) {
      const business = userProfile.savedBusinesses.find((biz) => biz.id === id);
      if (business) {
        setBusinessData(business);
      } else {
        navigate("/unauthorized"); // If the business does not belong to the user
      }
    }
  }, [userProfile, id, navigate]);

  const mutation = useMutation({
    mutationFn: async (updatedBusiness: {
      name: string;
      description: string;
      category: string;
    }) => {
      if (!id) {
        throw new Error("Business ID is missing");
      }
      return await editBusinessApi(id, updatedBusiness);
    },
    onSuccess: () => {
      navigate("/businesses");
    },
    onError: (err: any) => {
      alert(`Error: ${err.message}`);
    },
  });

  const handleSubmit = (updatedBusiness: {
    name: string;
    description: string;
    category: string;
  }) => {
    mutation.mutate(updatedBusiness);
  };

  if (userLoading || !businessData) {
    return <div>Loading...</div>;
  }

  if (userError) {
    return <div>Error fetching user data.</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="w-full max-w-lg p-10 bg-gray-800 rounded-lg shadow-xl shadow-gray-800">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-6">
          Edit Business
        </h1>
        <BusinessForm
          onSubmit={handleSubmit}
          initialData={businessData} // Pass the business data as initial values
        />
      </div>
    </div>
  );
};

export default EditBiz;
