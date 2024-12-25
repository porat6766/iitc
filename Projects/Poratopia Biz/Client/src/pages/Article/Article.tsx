import { deleteAuthTokenCookie, getAuthTokenFromCookie } from "@/lib/auth";
import api from "@/services/API";
import { authenticateUser } from "@/services/userService";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Article({ isLogIn, setIsLogIn }: any) {
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const token = getAuthTokenFromCookie();

      if (!token) {
        return;
      }
      console.log(token);

      if (token) {
        const isAuthenticated = await authenticateUser(token);
        console.log(isAuthenticated);

        if (isAuthenticated) {
          setIsLogIn(true);
        }
      } else {
        console.log("No token found");
        setIsLogIn(false);
      }
    } catch (error) {
      console.error("Authentication check failed:", error);
      deleteAuthTokenCookie();
      setIsLogIn(false);
    }
  };

  useEffect(() => {
    if (!isLogIn) {
      checkAuth();
    }
  }, [isLogIn]);

  return (
    <div className="w-screen">
      <Outlet />
    </div>
  );
}

export default Article;
