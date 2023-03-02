import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  PaletteMode,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  mode: PaletteMode;
  onClick: () => void;
};

const TopBar = ({ mode, onClick }: Props) => {
  const router = useRouter();

  const customTheme = useTheme();

  const [openDrawer, setOpenDrawer] = useState(false);

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
    <>
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
          <ListItemButton onClick={onClick}>
            <ListItemIcon>
              {mode === "light" ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </ListItemIcon>
            <ListItemText
              primary={mode === "light" ? "Dark Mode" : "Light Mode"}
            />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default TopBar;
