import { Business } from "../../types/business.tsx";
import { usebusinesses } from "@/hooks/useBusiness.tsx";
import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import BusinessList from "../../components/BusinessList/BusinessList.tsx";

const Businesses: React.FC<{ isLogIn: boolean }> = ({ isLogIn }) => {
  const [textSearch, setTextSearch] = useState<string>("");
  const { data: businesses, error, isLoading } = usebusinesses();
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);

  const debouncedSearch = useCallback(
    debounce((searchText: string) => {
      if (!businesses) return;

      const filtered = businesses.filter((business) =>
        business?.name?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredBusinesses(filtered);
    }, 300),
    [businesses]
  );

  useEffect(() => {
    debouncedSearch(textSearch);
  }, [textSearch, debouncedSearch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <h1 className="text-center text-3xl font-bold text-gray-400 animate-pulse">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <h1 className="text-center text-3xl font-bold text-red-500">
          Error: {error.message}
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-10 text-white min-h-screen">
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search businesses..."
          className="w-full max-w-md bg-gray-700 text-gray-300 text-lg px-5 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
      </div>

      <div>
        {filteredBusinesses.length > 0 ? (
          <BusinessList businesses={filteredBusinesses} isLogIn={isLogIn} />
        ) : (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-500 text-lg font-semibold">
              No businesses found. Try searching again.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Businesses;
