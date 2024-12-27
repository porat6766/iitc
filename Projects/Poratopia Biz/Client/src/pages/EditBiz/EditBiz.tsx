import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserProfile } from "../../hooks/useUsere.tsx";
import { editBusinessApi } from "../../services/businessService.tsx";
import BusinessForm from "../../components/FormBiz/FormBiz.tsx";
import socket from "@/lib/socket.tsx";

const EditBiz = ({ isLogIn }: { isLogIn: boolean }) => {
  const [dataToOmit, setDataToOmit] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

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
      const business = userProfile.savedBusinesses.find(
        (biz: any) => biz._id === id
      );
      if (business) {
        setBusinessData(business);
        setDataToOmit(business);
      } else {
        return;
      }
    }
  }, [userProfile, id]);

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
      queryClient.invalidateQueries(["userProfile"]);
      navigate("/businesses");
      socket.emit("businessUpdated", dataToOmit);
      console.log(dataToOmit);
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
        <BusinessForm onSubmit={handleSubmit} business={businessData} />
      </div>
    </div>
  );
};

export default EditBiz;
