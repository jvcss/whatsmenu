import {
  AppBar,
  Badge,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  PaletteMode,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type Props = {
  mode: PaletteMode;
  onClick: () => void;
};


const SizerToolbar = styled(Toolbar)(({ theme }) => ({
  width: "250px",
  flexShrink: 0,
  [theme.breakpoints.down("md")]: {
    width: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100px",
  },
}));


const TopBar = ({ mode, onClick }: Props) => {
  const router = useRouter();

  const customTheme = useTheme();

  const [openDrawer, setOpenDrawer] = useState(false);

  const [openCart, setOpenCart] = useState(false);

  const handleCartFinishClick = (route: string) => {
    /** send to whatsapp the order */
    setOpenDrawer(false);
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

          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Cardápio
          </Typography>

          <IconButton color="inherit" aria-label="cart" onClick={() => setOpenCart(true)}>
            <Badge badgeContent={true ? 3 : null} color="error">
              <ShoppingCartIcon
                aria-label="open cart"
                
              />
            </Badge>
          </IconButton>
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
        <SizerToolbar />
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
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </ListItemIcon>
            <ListItemText
              primary={mode === "light" ? "Dark Mode" : "Light Mode"}
            />
          </ListItemButton>
        </List>
      </Drawer>

      <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)} >
        {/* ... */}
        <SizerToolbar sx={{ width: "250px"}}/>
        <List>

          {menuItems.map((item, index) => (
            <ListItem
              key={item.text}
              onClick={() => handleMenuItemClick(item.route)}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          
        </List>
      </Drawer>
    </>
  );
};

export default TopBar;
