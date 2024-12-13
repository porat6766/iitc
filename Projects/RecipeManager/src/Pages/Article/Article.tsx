import Navbar from "../../Components/Nav-bar/Nav-bar.tsx";
import { Outlet } from "react-router-dom";

function Article() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Article;
