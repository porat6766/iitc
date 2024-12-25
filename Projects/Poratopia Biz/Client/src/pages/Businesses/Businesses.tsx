import { Business } from "../../types/business.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBusinessApi } from "@/services/businessService.tsx";
import { usebusinesses } from "@/hooks/useBusiness.tsx";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

function BusinessGrid() {
  const [textSearch, setTextSearch] = useState<string>("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: businesses, error, isLoading } = usebusinesses();

  // Debounce for search functionality
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

  // Mutation for deleting a business
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

      {/* Businesses grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {businesses.map((business) => (
          <div
            key={business._id}
            onClick={() => navigate(`./businessDetails/${business._id}`)}
            className="bg-white p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer relative overflow-hidden"
          >
            {/* Business details */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 truncate">
              {business.name}
            </h2>
            <p className="text-gray-600 mb-5 line-clamp-3">
              {business.description}
            </p>

            {/* Action buttons */}
            <div className="flex justify-end mt-5 gap-4">
              {/* Placeholder for future Edit button */}
              {/* <DialogAddEdit businessToUpdate={business} /> */}
              {/* <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(business._id);
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all hover:shadow-xl"
              >
                Remove
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessGrid;
