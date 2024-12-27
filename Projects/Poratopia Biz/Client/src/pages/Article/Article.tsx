// import AppSidebar from "@/components/MySideBar/MySideBar";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { deleteAuthTokenCookie, getAuthTokenFromCookie } from "@/lib/auth";
// import { authenticateUser } from "@/services/userService";
// import { useEffect } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";

// function Article({ isLogIn, setIsLogIn }: any) {
//   const navigate = useNavigate();
//   const checkAuth = async () => {
//     try {
//       const token = getAuthTokenFromCookie();

//       if (token) {
//         const isAuthenticated = await authenticateUser(token);
//         if (isAuthenticated) {
//           setIsLogIn(true);
//         }
//       }
//     } catch (error) {
//       console.error("Authentication check failed:", error);
//       deleteAuthTokenCookie();
//     }
//   };

//   useEffect(() => {
//     if (!isLogIn) {
//       checkAuth();
//     }
//   }, [isLogIn]);

//   return (
//     <div className=" flex items-center justify-center">
//       <SidebarProvider>
//         <AppSidebar isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
//         <div className="flex flex-col  flex-grow h-screen">
//           <header className="fixed top-0 bg-white z-50">
//             <SidebarTrigger />
//           </header>
//           <main className="flex-grow h-screen">
//             <ToastContainer />
//             <Outlet />
//           </main>
//         </div>
//       </SidebarProvider>
//     </div>
//   );
// }

// export default Article;

// src/layouts/Article/Article.tsx
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppSidebar from "@/components/MySideBar/MySideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { deleteAuthTokenCookie, getAuthTokenFromCookie } from "@/lib/auth";
import { authenticateUser } from "@/services/userService";
import socket from "../../socket";

function Article({ isLogIn, setIsLogIn }: any) {
  const navigate = useNavigate();

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
      console.error("Authentication check failed:", error);
      deleteAuthTokenCookie();
    }
  };

  useEffect(() => {
    if (!isLogIn) {
      checkAuth();
    }
  }, [isLogIn]);

  useEffect(() => {
    const handleBusinessUpdate = (businessId: string) => {
      toast.success(`Business with ID ${businessId} has been updated!`);
    };

    socket.on("businessUpdated", handleBusinessUpdate);

    return () => {
      socket.off("businessUpdated", handleBusinessUpdate);
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <SidebarProvider>
        <AppSidebar isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
        <div className="flex flex-col flex-grow h-screen">
          <header className="fixed top-0 bg-white z-50">
            <SidebarTrigger />
          </header>
          <main className="flex-grow h-screen">
            <ToastContainer />
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default Article;
