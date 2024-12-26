import { useUserProfile } from "../../hooks/useUsere.tsx";
import GridBusiness from "../../components/BusinessList/BusinessList.tsx";
import { useState } from "react";
import EditUser from "@/components/EditUser/EditUser.tsx";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBusinessApi } from "@/services/businessService.tsx";
import { getAuthTokenFromCookie } from "@/lib/auth.tsx";

const UserProfile = ({ isLogIn }: { isLogIn: boolean }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  if (!isLogIn) {
    navigate("/login");
  }

  const [isProfilePage, setIsProfilePage] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const { data, error, isLoading } = useUserProfile();

  const mutation = useMutation({
    mutationFn: deleteBusinessApi,
    onMutate: () => {
      setIsDeleting(true);
    },
    onSuccess: (deletedBusinessId: string) => {
      console.log(deletedBusinessId);

      const token = getAuthTokenFromCookie();

      queryClient.setQueryData(["userProfile", token], (oldData: any) => {
        console.log(
          "Before Update - Saved Businesses:",
          oldData.savedBusinesses
        );

        return {
          ...oldData,
          savedBusinesses: oldData.savedBusinesses.filter(
            (business: any) => business._id !== deletedBusinessId
          ),
        };
      });

      queryClient.invalidateQueries(["userProfile", token]);
      setIsDeleting(false);
    },
    onError: () => {
      alert("Failed to delete the business. Please try again later.");
      setIsDeleting(false);
    },
  });

  const onDeleteBusiness = (businessId: string | undefined) => {
    console.log(businessId);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this business?"
    );
    console.log(confirmDelete);

    if (!confirmDelete) return;

    if (!businessId) {
      console.error("Invalid business ID");
      return;
    }

    console.log("Attempting to delete business:", businessId);

    mutation.mutate(businessId, {
      onError: (error) => console.error("Error during mutation:", error),
      onSuccess: () => console.log("Successfully deleted:", businessId),
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-yellow-400 text-xl animate-spin">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-xl">Error fetching user profile</div>
    );
  }

  return (
    <div className="p-10 h-screen bg-gray-800">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
        User Profile
      </h1>

      <div className="mt-6 text-center text-black">
        <EditUser user={data} />
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xl font-semibold text-orange-500">Name:</p>
          <p className="text-lg text-white">{data.name}</p>
        </div>

        <div>
          <p className="text-xl font-semibold text-orange-500">Email:</p>
          <p className="text-lg text-white">{data.email}</p>
        </div>

        <div>
          <p className="text-xl font-semibold text-orange-500">Plan:</p>
          <p className="text-lg text-white">{data.plan}</p>
        </div>

        <div>
          <p className="text-xl font-semibold text-orange-500">
            Your Businesses:
          </p>
          <div className="mt-4">
            {isDeleting && (
              <div className="fixed inset-0 flex justify-center items-center text-yellow-400 z-50 bg-black bg-opacity-50">
                <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-yellow-400 rounded-full animate-spin"></div>
                <span className="ml-3 text-white">Deleting business...</span>
              </div>
            )}
            <GridBusiness
              businesses={data.savedBusinesses}
              isProfilePage={isProfilePage}
              onDeleteBusiness={onDeleteBusiness}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
