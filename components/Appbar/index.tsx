import {
    AppBar,
    Badge,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    PaletteMode,
    Toolbar,
    Typography,
    styled,
    useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { useMutation, useQuery, useQueryClient } from "react-query"; //we will use React Query to perform this 
import { CartItem } from "../../types/Cart";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from '@mui/icons-material/Delete'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type Props = {
    mode: PaletteMode;
    onClick: () => void;
};


const SizerToolbar = styled(Toolbar)(({ theme }) => ({
    width: "250px",
    flexShrink: 0,
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
        width: "200px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "100px",
    },
}));


const TopBar = ({ mode, onClick }: Props) => {
    const queryClient = useQueryClient();

    const router = useRouter();
    const customTheme = useTheme();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    // Query the cart data from the cache
    const { data } = useQuery<CartItem[], unknown>("cart", () =>
        queryClient.getQueryData("cart") ?? [],
        { initialData: [] }
    );


    const cartTotal = data?.reduce((acc: number, item: CartItem) => acc + item.price, 0);


    const handleRemoveItem = (id: string) => {
        // Get the current cart items from the cache
        const currentCartItems = queryClient.getQueryData<CartItem[]>("cart") || [];

        // Filter out the item with the specified ID
        const newCartItems = currentCartItems.filter((item) => item.id !== id);

        // Update the cart items in the cache
        queryClient.setQueryData("cart", newCartItems);

        // Invalidate the cart query to trigger a re-fetch
        queryClient.invalidateQueries("cart");
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
                    <Box display="flex" alignItems="center">
                        <Typography variant="subtitle1" sx={{ mr: 1 }}>{`R$${cartTotal || 0}`}</Typography>
                        <IconButton color="inherit" aria-label="cart" onClick={() => setOpenCart(true)}>
                            <Badge badgeContent={data?.length || 0} color="error">
                                <ShoppingCartIcon aria-label="open cart" />
                            </Badge>
                        </IconButton>
                    </Box>
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

                <SizerToolbar sx={{ width: "250px" }} >
                    <Box display="flex" alignItems="center">
                        <Typography variant="subtitle1" sx={{ mr: 1 }}>Total</Typography>
                        <Typography variant="subtitle1" sx={{ mr: 1 }}>{`R$${cartTotal || 0}`}</Typography>

                    </Box>
                </SizerToolbar>
                <List>
                    {data?.map((item: CartItem) => (
                        <ListItem key={item.id}>
                            <ListItemText primary={item.name} secondary={`$${item.price}`} />
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => handleRemoveItem(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default TopBar;
