import { Business } from "../../types/business.tsx";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useUserProfile } from "../../hooks/useUsere.tsx";
import {
  addSubscribeApi,
  removeSubscribeApi,
} from "../../services/subscribeService.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAuthTokenFromCookie } from "@/lib/auth.tsx";
import DialogComments from "../Comments/DialogComments.tsx";
import { useEffect, useState } from "react";
import socket from "../../lib/socket.tsx";
import { toast } from "react-toastify";

interface BusinessListProps {
  businesses: Business[];
  isProfilePage: boolean;
  isLogIn: boolean;
  isFav: boolean;
  onDeleteBusiness: (businessId: string) => void;
}

function BusinessList({
  businesses,
  isLogIn,
  isProfilePage,
  onDeleteBusiness,
  isFav,
}: BusinessListProps) {
  const navigate = useNavigate();
  const { data: userProfile, error, isLoading } = useUserProfile();
  const [isSub, setIsSub] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const handleNavToEdit = (id: string) => {
    navigate(`/editBusiness/${id}`);
  };

  useEffect(() => {
    socket.on("businessUpdated", (data) => {
      notify(`biz Updated: ${data?.name}`);
    });

    socket.on("businessDeleted", () => {
      notify("biz Delete for more info go to your FAV bIZS");
    });

    return () => {
      socket.off("businessDeleted");
      socket.off("businessUpdated");
    };
  }, []);

  const notify = (text: string) => {
    toast.success(text);
  };

  const handleSubscribe = async (business: Business) => {
    if (!isLogIn) {
      alert("Please log in to subscribe");
      return;
    }

    if (!userProfile) {
      return;
    }

    const isSubscribed = business?.subscribers?.some(
      (subscriber) =>
        subscriber._id === userProfile._id || subscriber === userProfile._id
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
      alert(`Successfully subscribed`);
    },
    onError: (err) => {
      alert(`Error: ${err.message}`);
    },
  });

  const removeSubMutation = useMutation({
    mutationFn: (_id: string) => removeSubscribeApi(_id),
    onSuccess: () => {
      const token = getAuthTokenFromCookie();
      queryClient.invalidateQueries(["userProfile", token]);
      alert(`Successfully unsubscribed`);
    },
    onError: (err) => {
      alert(`Error: ${err.message}`);
    },
  });

  const handleBuisnessDetail = (id: string) => {
    navigate(`/buisnessdetails/${id}`);
  };

  const backgroundImages = [
    "https://img.freepik.com/free-photo/business-people-having-meeting_53876-179900.jpg",
  ];

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-6 justify-items-center">
      {businesses.map((business) => {
        const randomBackground =
          backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

        return (
          <div
            onClick={() => {
              handleBuisnessDetail(business._id);
            }}
            key={business._id}
            className="w-full h-full relative p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col space-y-6 hover:bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
            style={{
              backgroundImage: `url(${randomBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-4xl text-white font-bold mb-2 truncate transition-all duration-300 hover:text-indigo-500 transform group-hover:scale-105">
              {business.name}
            </h2>

            <p className="text-white mb-4 text-lg font-medium line-clamp-3 transition-all duration-300 group-hover:text-gray-200 group-hover:scale-105 transform">
              {business.description}
            </p>

            <div className="flex items-center space-x-3 mb-4 transition-all duration-300 hover:text-indigo-400">
              <span className="text-sm text-white font-semibold">Owner:</span>
              <span className="text-white font-semibold">
                {business.owner.name}
              </span>
            </div>

            <div className="text-sm text-white font-semibold mb-4 transition-all duration-300 hover:text-indigo-500">
              {business.subscribers.length > 0 ? (
                <>
                  <span className="text-white font-semibold">
                    {business.subscribers.length}
                  </span>{" "}
                  subscribers
                </>
              ) : (
                <span className="text-white font-semibold">
                  No subscribers yet
                </span>
              )}
            </div>

            {((!isProfilePage &&
              isLogIn &&
              userProfile &&
              userProfile._id !== business.owner._id) ||
              isFav) && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="mt-4 flex flex-col items-center space-y-3 z-10 min-w-[130px]"
              >
                <button
                  onClick={() => {
                    handleSubscribe(business);
                  }}
                  className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-110"
                >
                  {business.subscribers.some(
                    (subscriber) =>
                      subscriber._id === userProfile._id ||
                      subscriber === userProfile._id
                  ) ? (
                    <FaHeart className="text-red-500 transition-all duration-200 transform group-hover:scale-125" />
                  ) : (
                    <FaRegHeart className="mr-2 text-white transition-all duration-200 transform group-hover:scale-125" />
                  )}
                  {business.subscribers.some(
                    (subscriber) =>
                      subscriber._id === userProfile._id ||
                      subscriber === userProfile._id
                  )
                    ? "Unsubscribe"
                    : "Subscribe"}
                </button>
                <DialogComments
                  comments={business.reviews}
                  businessId={business._id}
                />
              </div>
            )}

            {isProfilePage && (
              <div className="absolute bottom-4 right-4 flex space-x-4 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavToEdit(business._id);
                  }}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg shadow-xl hover:bg-gradient-to-l transition-all duration-300 transform group hover:scale-110"
                >
                  Edit
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteBusiness(business._id, business.name);
                  }}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg shadow-xl hover:bg-gradient-to-l transition-all duration-300 transform group hover:scale-110"
                >
                  Delete
                </button>
              </div>
            )}

            {userProfile?._id === business.owner._id && !isProfilePage && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/userprofile");
                }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg shadow-xl hover:bg-gradient-to-l transition-all duration-300 transform group hover:scale-110"
              >
                Edit Biz
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default BusinessList;
