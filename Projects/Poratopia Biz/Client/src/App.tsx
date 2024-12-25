import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

//import components
import SignUp from "./pages/Sign-up/SignUp.tsx";
import LogIn from "./pages/Log-in/LogIn.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import Article from "./pages/Article/Article.tsx";
import Businesses from "./pages/Businesses/Businesses.tsx";
import UserProfile from "./pages/UserProfile/UserProfile.tsx";
// import ErrorPage from "./Pages/ErorPage/ErorPage.jsx";
// import ContactUs from "./Pages/ContactUs/ContactUs.jsx";

import AppSidebar from "./components/MySideBar/MySideBar.tsx";
import { SidebarTrigger } from "./components/ui/sidebar.js";
import AddBiz from "./pages/addbiz/addbiz.tsx";
import EditBiz from "./pages/EditBiz/EditBiz.tsx";
import { getAuthTokenFromCookie } from "./lib/auth.tsx";

function App() {
  const [isLogIn, setIsLogIn] = useState<boolean>(false);

  useEffect(() => {
    const token = getAuthTokenFromCookie();
    if (token) {
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <SidebarTrigger />
          <AppSidebar isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
          <Article isLogIn={isLogIn} setIsLogIn={isLogIn} />
        </div>
      ),
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/businesses", element: <Businesses isLogIn={isLogIn} /> },
        { path: "/addbiz", element: <AddBiz isLogIn={isLogIn} /> },
        {
          path: "/userprofile",
          element: <UserProfile />,
          children: [
            {
              path: "editBusiness/:id",
              element: <EditBiz isLogIn={isLogIn} />,
            },
          ],
        },
        {
          path: "/login",
          element: <LogIn isLogIn={isLogIn} setIsLogIn={setIsLogIn} />,
        },
        {
          path: "/signup",
          element: <SignUp isLogIn={isLogIn} setIsLogIn={setIsLogIn} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
