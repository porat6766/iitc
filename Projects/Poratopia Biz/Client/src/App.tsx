import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

//import components
import SignUp from "./pages/Sign-up/SignUp.tsx";
import LogIn from "./pages/Log-in/LogIn.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import Article from "./pages/Article/Article.tsx";
// import UserProfile from "./Pages/UserProfile/UserProfile.jsx";
// import ErrorPage from "./Pages/ErorPage/ErorPage.jsx";
// import ContactUs from "./Pages/ContactUs/ContactUs.jsx";

import AppSidebar from "./components/MySideBar/MySideBar.tsx";
import { SidebarTrigger } from "./components/ui/sidebar.js";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="w-screen">
          <SidebarTrigger />
          <AppSidebar />
          <Article />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        // {
        //   path: "/userProfile/:id",
        //   element: <UserProfile />,
        // },
        {
          path: "/login",
          element: <LogIn isLogIn={isLogIn} setIsLogIn={setIsLogIn} />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },

    // {
    //   path: "/error",
    //   element: <ErrorPage />,
    // },
    // {
    //   path: "/contactUs",
    //   element: <ContactUs />,
    // },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
