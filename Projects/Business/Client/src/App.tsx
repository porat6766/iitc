import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import SignUp from "./pages/Sign-up/SignUp.tsx";
import LogIn from "./pages/Log-in/LogIn.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import Article from "./pages/Article/Article.tsx";
import Businesses from "./pages/Businesses/Businesses.tsx";
import UserProfile from "./pages/UserProfile/UserProfile.tsx";
import AddBiz from "./pages/addbiz/addbiz.tsx";
import EditBiz from "./pages/EditBiz/EditBiz.tsx";
import ErrorPage from "./pages/ErorPage/ErorPage.tsx";
import AboutUs from "./pages/aboutus/aboutus.tsx";
import Favorites from "./pages/Favorites/Favorites.tsx";
import BuisnessDetails from "./pages/BuisnessDetails/BuisnessDetails.tsx";
import { deleteAuthTokenCookie, getAuthTokenFromCookie } from "./lib/auth.tsx";
import { authenticateUser } from "./services/userService.tsx";

function App() {
  const [isLogIn, setIsLogIn] = useState<boolean>(false);

  const checkAuth = async () => {
    try {
      const token = getAuthTokenFromCookie();

      if (token) {
        const isAuthenticated = await authenticateUser(token);

        if (isAuthenticated) {
          setIsLogIn(true);
        }
      }
    } catch (error) {
      deleteAuthTokenCookie();
    }
  };

  useEffect(() => {
    if (!isLogIn) {
      checkAuth();
    }
  }, [isLogIn]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Article isLogIn={isLogIn} setIsLogIn={setIsLogIn} />}
        >
          <Route index element={<HomePage isLogIn={isLogIn} />} />
          <Route path="businesses" element={<Businesses isLogIn={isLogIn} />} />
          <Route path="addbiz" element={<AddBiz isLogIn={isLogIn} />} />
          <Route
            path="userprofile"
            element={<UserProfile isLogIn={isLogIn} />}
          />
          <Route path="buisnessdetails/:id" element={<BuisnessDetails />} />
          <Route
            path="editBusiness/:id"
            element={<EditBiz isLogIn={isLogIn} />}
          />
          <Route
            path="favoritebusinesses"
            element={<Favorites isLogIn={isLogIn} />}
          />
          <Route
            path="login"
            element={<LogIn isLogIn={isLogIn} setIsLogIn={setIsLogIn} />}
          />
          <Route
            path="signup"
            element={<SignUp isLogIn={isLogIn} setIsLogIn={setIsLogIn} />}
          />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="errorpage" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
