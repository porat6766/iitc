import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const drawerWidth = 240;
const navItems = ["Home", "Recipes", "Profile"];
const logoUrl =
  "https://files.oaiusercontent.com/file-3RwvxA8Py8uVj6vzvUaiY8?se=2024-12-12T13%3A19%3A05Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D80ed4ab5-3447-44fb-b5fa-9961b02085a6.webp&sig=eVm6MGGsxPFv/9LtF9MPaDvaSfc0ezMaVKSd9qzLALU%3D";

function Logo() {
  return (
    <div className="flex md:block m:block justify-center">
      <img src={logoUrl} alt="logo" className="rounded-xl w-10" />
    </div>
  );
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const currentPath =
      location.pathname === "/" ? "Home" : location.pathname.slice(1);
    document.title = `My App - ${
      currentPath.charAt(0).toUpperCase() + currentPath.slice(1)
    }`;
  }, [location]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#a01c0c",
        height: "100%",
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Logo size={12} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Logo size={10} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <div className="flex">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {navItems.map((item) => (
                <Button
                  component={Link}
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  key={item}
                  sx={{ color: "#fff" }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
