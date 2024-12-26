import { Business } from "../../types/business.tsx";
import { useNavigate } from "react-router-dom";
import { FaCommentDots, FaHeart, FaRegHeart } from "react-icons/fa";
import { useUserProfile } from "../../hooks/useUsere.tsx";
import {
  addSubscribeApi,
  removeSubscribeApi,
} from "../../services/subscribeService.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAuthTokenFromCookie } from "@/lib/auth.tsx";

interface BusinessListProps {
  businesses: Business[];
  isProfilePage: boolean;
  isLogIn: boolean;
  onDeleteBusiness: (businessId: string) => void;
}

function BusinessList({
  businesses,
  isLogIn,
  isProfilePage,
  onDeleteBusiness,
}: BusinessListProps) {
  const navigate = useNavigate();
  const { data: userProfile, error, isLoading } = useUserProfile();
  const queryClient = useQueryClient();

  const handleNavToEdit = (id: string) => {
    navigate(`/editBusiness/${id}`);
  };

  const handleSubscribe = async (business: Business) => {
    if (!isLogIn) {
      // להשתמש בcomponent toast במקום
      alert("Please log in to subscribe");
      return;
    }

    if (!userProfile) {
      return; // or handle loading/error state
    }

    const isSubscribed = business?.subscribers?.some(
      (subscriber) => subscriber._id === userProfile._id
    );

    if (isSubscribed) {
      removeSubMutation.mutate(business._id);
    } else {
      addSubMutation.mutate(business._id);
    }
  };

  const addSubMutation = useMutation({
    mutationFn: (_id: string) => addSubscribeApi(_id),
    onSuccess: () => {
      const token = getAuthTokenFromCookie();
      queryClient.invalidateQueries(["userProfile", token]);
      // להשתמש בcomponent toast במקום
      alert(`Successfully subscribed`);
    },
    onError: (err) => {
      // להשתמש בcomponent toast במקום
      alert(`Error: ${err.message}`);
    },
  });

  const removeSubMutation = useMutation({
    mutationFn: (_id: string) => removeSubscribeApi(_id),
    onSuccess: () => {
      const token = getAuthTokenFromCookie();
      queryClient.invalidateQueries(["userProfile", token]);
      // להשתמש בcomponent toast במקום
      alert(`Successfully unsubscribed`);
    },
    onError: (err) => {
      // להשתמש בcomponent toast במקום
      alert(`Error: ${err.message}`);
    },
  });

  return (
    <div className=" grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-6 justify-items-center">
      {businesses.map((business) => (
        <div
          key={business._id}
          className="w-full h-full relative bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden flex flex-col"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-3 truncate">
            {business.name}
          </h2>
          <p className="text-gray-600 mb-5 line-clamp-3">
            {business.description}
          </p>

          {!isProfilePage &&
            isLogIn &&
            userProfile &&
            userProfile._id !== business.owner._id && (
              <div className="mt-[20px] ml-[100px] bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col space-y-3 z-10">
                <button
                  onClick={() => handleSubscribe(business)}
                  className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-400 transition duration-200"
                >
                  {business?.subscribers?.some(
                    (subscriber) => subscriber._id === userProfile._id
                  ) ? (
                    <FaHeart className="mr-2 text-red-500" />
                  ) : (
                    <FaRegHeart className="mr-2 text-white" />
                  )}
                  {business?.subscribers?.some(
                    (subscriber) => subscriber._id === userProfile._id
                  )
                    ? "Unsubscribe"
                    : "Subscribe"}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Adding comment for", business.name);
                  }}
                  className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-400 transition duration-200"
                >
                  <FaCommentDots className="mr-2" />
                  Add Comment
                </button>
              </div>
            )}

          {isProfilePage && (
            <div className="absolute bottom-2 right-3 flex space-x-3 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavToEdit(business._id);
                }}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition duration-200"
              >
                Edit
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteBusiness(business._id);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-200"
              >
                Delete
              </button>
            </div>
          )}

          {userProfile?._id === business?.owner?._id && !isProfilePage && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/userprofile");
              }}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition duration-200"
            >
              ערוך עסק
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default BusinessList;
