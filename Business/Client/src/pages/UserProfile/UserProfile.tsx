import { useUserBizs, useUserProfile } from "../../hooks/useUsere.tsx";
import GridBusiness from "../../components/BusinessList/BusinessList.tsx";
import EditUser from "@/components/EditUser/EditUser.tsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBusinessApi } from "@/services/businessService.tsx";
import socket from "@/lib/socket.tsx";
import Loader from "../../components/Loader/Loader.tsx";

const UserProfile = ({ isLogIn }: { isLogIn: boolean }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isDeleting, setIsDeleting] = useState(false);

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = useUserProfile();
  const {
    data: userBusinesses,
    error: businessError,
    isLoading: businessLoading,
  } = useUserBizs();

  useEffect(() => {
    if (!isLogIn) {
      setTimeout(() => navigate("/login"), 2000);
    }
  }, [isLogIn, navigate]);

  const mutation = useMutation({
    mutationFn: deleteBusinessApi,
    onMutate: () => setIsDeleting(true),
    onSuccess: (deletedBusinessId) => {
      queryClient.invalidateQueries(["userProfile"]);
      setIsDeleting(false);
      socket.emit("businessDeleted");
    },
    onError: () => {
      alert("Failed to delete the business. Please try again later.");
      setIsDeleting(false);
    },
  });

  const handleDeleteBusiness = (businessId: string) => {
    if (window.confirm("Are you sure you want to delete this business?")) {
      mutation.mutate(businessId);
    }
  };

  if (userLoading || businessLoading) {
    return <Loader message="Loading user profile..." />;
  }

  if (userError || businessError) {
    return (
      <div className="text-center text-red-500">
        Error loading data. Please try again later.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-800 to-gray-900 text-white">
      <header className="w-full text-center py-6">
        <h1 className="text-4xl font-bold text-orange-500 mb-8">
          User Profile
        </h1>
      </header>

      <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-black space-y-6 m-10">
        <EditUser user={userData} />
        <div>
          <p className="text-lg font-semibold text-orange-400">Name:</p>
          <p>{userData.name}</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-orange-400">Email:</p>
          <p>{userData.email}</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-orange-400">Plan:</p>
          <p>{userData.plan}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">
          Your Businesses
        </h2>
        {isDeleting && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="text-yellow-400 text-lg">Deleting business...</div>
          </div>
        )}
        <GridBusiness
          businesses={userBusinesses}
          isProfilePage={true}
          onDeleteBusiness={handleDeleteBusiness}
        />
      </div>

      <footer className="w-full text-center mt-16 py-6 bg-gray-800">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Poratopia. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default UserProfile;
