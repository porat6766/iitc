import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/poratopia logo.png";

const HomePage = ({ isLogIn }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (isLogIn) {
      navigate("/businesses");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white flex flex-col items-center justify-center">
      <header className="w-full text-center py-6">
        <img
          src={LOGO}
          alt="Poratopia Logo"
          className="w-48 h-auto mx-auto animate-bounce drop-shadow-md"
        />
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mt-4">
          Welcome to Poratopia
        </h1>
      </header>

      <section className="text-center max-w-4xl px-4 mt-8">
        <p className="text-xl leading-relaxed">
          Poratopia is the ultimate platform to connect businesses and
          customers. Discover opportunities, showcase your business, and grow
          your network in an innovative and intuitive environment.
        </p>
        <p className="mt-4 text-lg text-gray-400">
          Built with passion and dedication, Poratopia offers cutting-edge tools
          to help businesses thrive and customers find exactly what they need.
        </p>
      </section>

      <div className="mt-12">
        <button
          onClick={() => handleNavigate()}
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg transition-all duration-300"
        >
          Get Started
        </button>
        <button
          onClick={() => navigate("/aboutus")}
          className="ml-4 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-bold rounded-full shadow-lg transition-all duration-300"
        >
          Learn More
        </button>
      </div>

      <section className="mt-16 w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Connect</h3>
          <p className="text-gray-300">
            Build meaningful connections with businesses and customers
            worldwide.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Showcase</h3>
          <p className="text-gray-300">
            Highlight your business's unique features and stand out from the
            competition.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Grow</h3>
          <p className="text-gray-300">
            Use our tools to scale your business and achieve your goals.
          </p>
        </div>
      </section>

      <footer className="w-full text-center mt-16 py-6 bg-gray-900">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Poratopia. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
