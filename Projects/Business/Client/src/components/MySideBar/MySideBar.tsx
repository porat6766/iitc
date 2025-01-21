interface AppSidebarProps {
  isLogIn: boolean;
  setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

import { deleteAuthTokenCookie } from "@/lib/auth";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Icons
import {
  Plus,
  Home,
  User,
  ShieldHalf,
  User2,
  ChevronUp,
  LogIn,
  UserPlus,
  Bell,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenu,
} from "@radix-ui/react-dropdown-menu";

const navList = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Businesses",
    url: "/businesses",
    icon: ShieldHalf,
  },
  {
    title: "Add Biz",
    url: "/addbiz",
    icon: Plus,
  },
  {
    title: "Profile",
    url: "/userprofile",
    icon: User,
  },
  {
    title: "Favorite ",
    url: "/favoritebusinesses",
    icon: Star,
  },
];

const navUser = [
  {
    title: "Login",
    url: "/login",
    icon: LogIn,
  },
  {
    title: "Sign Up",
    url: "/signup",
    icon: UserPlus,
  },
];
const AppSidebar: React.FC<AppSidebarProps> = ({ isLogIn, setIsLogIn }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    deleteAuthTokenCookie();
    setIsLogIn(false);
    navigate("/");
  };

  return (
    <Sidebar>
      <SidebarHeader className="bg-red-600">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-green-400 via-blue-500 to-purple-600 animate-textShadow hover:animate-pulse tracking-wide uppercase shadow-lg hover:scale-105 transform transition-all duration-500">
          BUSINESS
        </h1>
      </SidebarHeader>

      <SidebarContent className="bg-red-600">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navList.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <a
                      className="cursor-pointer flex items-center space-x-2  p-2 rounded-lg"
                      onClick={() => navigate(link.url)}
                    >
                      <link.icon className="w-5 h-5 " />
                      <span className="text-lg text-center bg-[var-(--button-bg)] hover:bg-[var-(--button-bg)]">
                        {link.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-red-600">
        <SidebarMenu>
          <SidebarMenuItem>
            {isLogIn ? (
              <DropdownMenu>
                {/* UserLogged */}
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center w-full">
                    <User2 />
                    <ChevronUp className="ml-auto" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width] p-2 rounded-xl bg-[var(--dropdown-bg)]"
                >
                  <DropdownMenuItem className="dropdown-bg-hover p-2 pl-4 rounded-xl cursor-pointer">
                    <span onClick={() => navigate("/userprofile")}>
                      Account
                    </span>
                  </DropdownMenuItem>
                  {/* <DropdownMenuItem className="dropdown-bg-hover p-2 pl-4 rounded-xl cursor-pointer">
                    <span>Billing</span>
                  </DropdownMenuItem> */}
                  <DropdownMenuItem
                    className="dropdown-bg-hover p-2 pl-4 rounded-xl cursor-pointer"
                    onClick={handleSignOut}
                  >
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <SidebarMenu>
                {navUser.map((link) => (
                  <SidebarMenuItem key={link.title}>
                    <SidebarMenuButton asChild>
                      <a
                        className="cursor-pointer flex items-center space-x-2 p-2 rounded-lg"
                        onClick={() => navigate(link.url)}
                      >
                        <link.icon className="w-5 h-5" />
                        <span>{link.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
