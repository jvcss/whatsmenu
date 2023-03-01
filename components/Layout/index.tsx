import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

import { useRouter } from "next/router";
import Footer from "../Footer";

const drawerWidth = 240;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  const handleThemeChange = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleMenuItemClick = (route: string) => {
    router.push(route);
    setOpenDrawer(false);
  };

  const menuItems = [
    { text: "Home", route: "/" },
    { text: "Menu", route: "/menu" },
    { text: "Cart", route: "/cart" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            My Restaurant
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={item.text}
              onClick={() => handleMenuItemClick(item.route)}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          <ListItemButton onClick={handleThemeChange}>
            <ListItemIcon>
              {themeMode === "light" ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </ListItemIcon>
            <ListItemText
              primary={themeMode === "light" ? "Dark Mode" : "Light Mode"}
            />
          </ListItemButton>
        </List>
      </Drawer>
      <main>
        <Toolbar />
        {children}
      </main>
      <Footer/>
    </ThemeProvider>
  );
};

export default Layout;
