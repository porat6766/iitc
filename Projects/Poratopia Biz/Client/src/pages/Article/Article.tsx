
import { Outlet } from "react-router-dom";

function Article() {
  return (
    <div className="w-screen">
      <Outlet />
    </div>
  );
}

export default Article;
