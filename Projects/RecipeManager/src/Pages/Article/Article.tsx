import Navbar from "../../Components/Nav-bar/Nav-bar.tsx";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/Components/theme-provider/theme-provider.tsx";

function Article() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default Article;
