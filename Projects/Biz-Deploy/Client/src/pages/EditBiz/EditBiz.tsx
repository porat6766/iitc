import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editBusinessApi } from "../../services/businessService.tsx";
import BusinessForm from "../../components/FormBiz/FormBiz.tsx";
import socket from "@/lib/socket.tsx";
import { usebusinesses } from "@/hooks/useBusiness.tsx";
import { getAuthTokenFromCookie } from "@/lib/auth.tsx";
import { getUserBussiness } from "@/services/userService.tsx";

const EditBiz = () => {
  const [dataToOmit, setDataToOmit] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data: businesses } = usebusinesses();

  const [businessData, setBusinessData] = useState<{
    name: string;
    description: string;
    category: string;
  } | null>(null);

  useEffect(() => {
    const token = getAuthTokenFromCookie();
    const fetchBiz = async () => {
      const bizs = await getUserBussiness(token as any);

      const business = bizs.find((biz: any) => biz._id === id);
      if (business) {
        setBusinessData(business);
        setDataToOmit(business);
      }
    };
    fetchBiz();
  }, []);

  const mutation = useMutation({
    mutationFn: async (updatedBusiness: {
      name: string;
      description: string;
      category: string;
    }) => {
      if (!id) {
        throw new Error("Business ID is missing");
      }
      return await editBusinessApi(id, updatedBusiness as any);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userProfile"] as any);
      navigate("/businesses");
      console.log(businesses);
      // const checkBoth = businesses.some(
      //   (biz: object) =>
      //     biz.subscribers?.some((sub) => sub._id === userProfile._id) &&
      //     biz.reviews?.some((review) => review.userId?._id === userProfile._id)
      // );
      // if (checkBoth) {
      socket.emit("businessUpdated", dataToOmit);
      console.log("Data sent to socket:", dataToOmit);
      // }
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
  if (!businessData) {
    return <div>Loading...</div>;
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
