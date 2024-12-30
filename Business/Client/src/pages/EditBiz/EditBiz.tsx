import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserProfile } from "../../hooks/useUsere.tsx";
import { editBusinessApi } from "../../services/businessService.tsx";
import BusinessForm from "../../components/FormBiz/FormBiz.tsx";
import socket from "@/lib/socket.tsx";
import { usebusinesses } from "@/hooks/useBusiness.tsx";
import { getAuthTokenFromCookie } from "@/lib/auth.tsx";
import { getUserBussiness } from "@/services/userService.tsx";

const EditBiz = ({ isLogIn }: { isLogIn: boolean }) => {
  const [dataToOmit, setDataToOmit] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data: businesses, error, isLoading } = usebusinesses();

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
    setTimeout(() => {
      if (!isLogIn) {
        navigate("/login");
      }
    }, 5000);
  }, [isLogIn, navigate]);

  useEffect(() => {
    const token = getAuthTokenFromCookie();
    const fetchBiz = async () => {
      const bizs = await getUserBussiness(token);
      const business = bizs.find((biz: any) => biz._id === id);
      if (business) {
        setBusinessData(business);
        setDataToOmit(business);
      }
    };
    fetchBiz();
  }, [id]);

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
      const checkBoth = businesses.some(
        (biz: object) =>
          biz.subscribers?.some((sub) => sub._id === userProfile._id) &&
          biz.reviews?.some((review) => review.userId?._id === userProfile._id)
      );
      if (checkBoth) {
        socket.emit("businessUpdated", dataToOmit);
      }
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
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-xl shadow-gray-700">
        <h1 className="text-5xl font-semibold text-center text-blue-400 mb-6">
          Update Your Business Details
        </h1>
        <BusinessForm onSubmit={handleSubmit} business={businessData} />
      </div>
    </div>
  );
};

export default EditBiz;
