import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "@/services/API";

function BusinessDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await api.get(`/businesses/getbiz/${id}`);
        setBusiness(response.data.businesse);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBusiness();
  }, [id]);

  if (loading)
    return <div className="text-center text-lg text-gray-300">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-lg text-red-500">Error: {error}</div>
    );
  if (!business)
    return (
      <div className="text-center text-lg text-gray-300">
        Business not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center py-12 px-8">
      <header className="w-full text-center mb-8">
        <h1 className="text-5xl font-semibold text-white mt-4">
          {business.name}
        </h1>
        <p className="text-gray-400 text-lg italic mt-2">{business.category}</p>
      </header>

      <section className="bg-gray-800 p-8 rounded-xl shadow-md max-w-4xl w-full mt-6">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">
          About the Business
        </h2>
        <p className="text-gray-300 mb-6">{business.description}</p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">
            Owner Details:
          </h3>
          <p className="text-gray-300">Name: {business.owner?.name}</p>
          <p className="text-gray-300">{business.owner?.email}</p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">
            Subscribers:
          </h3>
          <p className="text-gray-300">{business.subscribers.length}</p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">
            Reviews:
          </h3>
          <p className="text-gray-300">{business.reviews.length} reviews</p>
          <ul className="h-48 overflow-y-auto bg-gray-700 p-4 rounded-lg mt-4">
            {business.reviews?.map((review) => (
              <li
                key={review._id}
                className="border-b border-gray-600 pb-2 mb-2 last:border-b-0 last:pb-0"
              >
                <p className="text-gray-300">{review.comment}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {new Date(review.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="w-full text-center mt-12 py-4 bg-gray-800">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Poratopia. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default BusinessDetail;
