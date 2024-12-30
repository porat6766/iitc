import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/poratopia logo.png";

const AboutUsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center">
      <header className="w-full text-center py-6">
        <img
          src={LOGO}
          alt="Business Logo"
          className="w-40 h-auto mx-auto drop-shadow-lg"
        />
        <h1 className="text-5xl font-semibold text-white mt-4">
          Learn More About <span className="text-blue-400">Business</span>
        </h1>
      </header>

      <section className="text-center max-w-3xl px-6 mt-8">
        <p className="text-lg leading-relaxed text-gray-300">
          Business is more than just a platform; it's a hub for businesses and
          customers to create, grow, and thrive together. Our mission is to
          foster meaningful connections and provide the tools you need for
          success.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          Whether you're an entrepreneur looking to expand your audience or a
          customer searching for the best services, Business has you covered.
        </p>
      </section>

      <div className="mt-12">
        <button
          onClick={() => navigate("/businesses")}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-md transition-all duration-300"
        >
          Explore Businesses
        </button>
        <button
          onClick={() => navigate("/login")}
          className="ml-4 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-md shadow-md transition-all duration-300"
        >
          Log In
        </button>
      </div>

      <section className="mt-16 w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            Business Directory
          </h3>
          <p className="text-gray-300 text-sm">
            Access an extensive directory of businesses tailored to your needs.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            User Reviews
          </h3>
          <p className="text-gray-300 text-sm">
            Explore authentic reviews and ratings from real users.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            Networking
          </h3>
          <p className="text-gray-300 text-sm">
            Connect with industry leaders and customers alike.
          </p>
        </div>
      </section>

      <footer className="w-full text-center mt-16 py-6 bg-gray-800">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Business. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutUsPage;
