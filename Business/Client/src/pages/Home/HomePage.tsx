import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/poratopia logo.png";

const HomePage: React.FC<{ isLogIn: boolean }> = ({ isLogIn }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (isLogIn) {
      navigate("/businesses");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center">
      <header className="w-full text-center py-6">
        <img
          src={LOGO}
          alt="Business Logo"
          className="w-40 h-auto mx-auto drop-shadow-lg"
        />
        <h1 className="text-5xl font-semibold text-white mt-4">
          Welcome to <span className="text-blue-400">Business</span>{" "}
        </h1>
      </header>

      <section className="text-center max-w-3xl px-6 mt-8">
        <p className="text-lg leading-relaxed text-gray-300">
          Business is your gateway to building a stronger business presence.
          Connect, grow, and succeed in a dynamic and professional environment.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          Empowering businesses with innovative tools and meaningful
          connections.
        </p>
      </section>

      <div className="mt-12">
        <button
          onClick={handleNavigate}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-md transition-all duration-300"
        >
          Get Started
        </button>
        <button
          onClick={() => navigate("/aboutus")}
          className="ml-4 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-md shadow-md transition-all duration-300"
        >
          Learn More
        </button>
      </div>

      <section className="mt-16 w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Connect</h3>
          <p className="text-gray-300 text-sm">
            Build strong networks with businesses and customers worldwide.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Showcase</h3>
          <p className="text-gray-300 text-sm">
            Display your business's best features and increase visibility.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-md shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Grow</h3>
          <p className="text-gray-300 text-sm">
            Leverage our tools to expand your business and achieve your goals.
          </p>
        </div>
      </section>

      <footer className="w-full text-center mt-16 py-6 bg-gray-800">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Business. All rights reserved.{" "}
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
