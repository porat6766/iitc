import { Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <>
      <h1>Articals page</h1>
      <Outlet />
    </>
  );
};
export default Articles;