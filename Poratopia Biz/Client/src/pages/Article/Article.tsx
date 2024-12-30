import AppSidebar from "@/components/MySideBar/MySideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Article({ isLogIn, setIsLogIn }: any) {
  return (
    <div className=" flex items-center justify-center">
      <SidebarProvider>
        <AppSidebar isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
        <div className="flex flex-col  flex-grow h-screen">
          <header className="fixed top-0 bg-white z-50 rounded-br-xl">
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
