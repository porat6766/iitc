import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="sticky top-0 w-screen bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/" className="text-white font-bold text-lg">
            בית
          </Link>
        </div>
        {/* <div className="flex justify-between gap-5">
          <Link to="/about" className="text-white">
            אודות
          </Link>
          <Link to="/services" className="text-white">
            שירותים
          </Link>
          <Link to="/contact" className="text-white">
            צור קשר
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
