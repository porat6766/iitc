import { Business } from "../../types/business.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBusinessApi } from "@/services/businessService.tsx";
import { usebusinesses } from "@/hooks/useBusiness.tsx";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import BusinessList from "../../components/BusinessList/BusinessList.tsx";

function BusinessGrid({ isLogIn }) {
  const [textSearch, setTextSearch] = useState<string>("");
  const queryClient = useQueryClient();
  const { data: businesses, error, isLoading } = usebusinesses();

  const debouncedSetQueryData = useCallback(
    debounce((searchText: string) => {
      queryClient.invalidateQueries({ queryKey: ["businesses"] });
      queryClient.setQueryData<Business[] | undefined>(
        ["businesses"],
        (oldBusinesses) => {
          if (!oldBusinesses) return [];
          if (!searchText) return oldBusinesses;

          return oldBusinesses.filter((business) =>
            business?.name?.toLowerCase().includes(searchText.toLowerCase())
          );
        }
      );
    }, 300),
    [queryClient]
  );

  useEffect(() => {
    debouncedSetQueryData(textSearch);
  }, [textSearch, debouncedSetQueryData]);

  const deleteBusinessMutation = useMutation({
    mutationFn: deleteBusinessApi,
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["businesses"] });

      const previousBusinesses = queryClient.getQueryData<Business[]>([
        "businesses",
      ]);

      queryClient.setQueryData<Business[] | undefined>(
        ["businesses"],
        (oldBusinesses) =>
          oldBusinesses?.filter((business) => business._id !== id) || []
      );

      return { previousBusinesses };
    },
    onError: (_error, _id, context) => {
      if (context?.previousBusinesses) {
        queryClient.setQueryData(["businesses"], context.previousBusinesses);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["businesses"] });
    },
  });

  const handleDelete = (id: string) => {
    deleteBusinessMutation.mutate(id);
  };

  if (isLoading)
    return (
      <h1 className="text-center text-3xl font-bold text-gray-700">
        Loading...
      </h1>
    );
  if (error)
    return (
      <h1 className="text-center text-3xl font-bold text-red-500">
        Error: {error.message}
      </h1>
    );
  if (!businesses || businesses.length === 0)
    return (
      <h1 className="text-center text-3xl font-bold text-gray-700">
        No businesses found.
      </h1>
    );

  return (
    <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 min-h-screen p-10">
      {/* Search input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search businesses..."
          className="w-full max-w-md bg-white text-gray-800 text-lg px-5 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
      </div>

      <BusinessList businesses={businesses} isLogIn={isLogIn} />
    </div>
  );
}

export default BusinessGrid;
