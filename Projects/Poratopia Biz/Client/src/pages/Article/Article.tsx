import AppSidebar from "@/components/MySideBar/MySideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { deleteAuthTokenCookie, getAuthTokenFromCookie } from "@/lib/auth";
import { authenticateUser } from "@/services/userService";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Article({ isLogIn, setIsLogIn }: any) {
  const navigate = useNavigate();
  const checkAuth = async () => {
    try {
      const token = await getAuthTokenFromCookie();

      if (!token) {
        navigate("/login");
      }

      if (token) {
        const isAuthenticated = await authenticateUser(token);
        console.log(isAuthenticated);
        setIsLogIn(true);
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
    <div className="min-h-screen flex items-center justify-center">
      <SidebarProvider>
        <AppSidebar isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
        <div className="flex flex-col  flex-grow h-screen">
          <header className="sticky top-0 bg-white z-50">
            <SidebarTrigger />
          </header>
          <main className="flex-grow h-screen">
            <Outlet />
          </main>
          {/* <footer>footer</footer> */}
        </div>
      </SidebarProvider>
    </div>
  );
}

export default Article;
