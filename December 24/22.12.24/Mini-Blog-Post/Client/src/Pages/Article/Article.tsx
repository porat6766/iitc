import { Outlet } from "react-router-dom";
import NavBar from "@/Components/NavBar/NavBar";

const Article = () => {
  return (
    <div className="">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Article;
