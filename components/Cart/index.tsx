import { Box, Drawer, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { CartItem } from "../../types/Cart";
import DeleteIcon from '@mui/icons-material/Delete'

import SizerToolbar from "../ToolBar";

type Props = {
    open: boolean;
    onClose: () => void;
};



const Cart = ({ open, onClose }: Props) => {
    const queryClient = useQueryClient();

    const { data } = useQuery<CartItem[], unknown>(
        "cart",
        () => queryClient.getQueryData("cart") ?? [],
        { initialData: undefined }
    );

    const cartTotal = data?.reduce((acc: number, item: CartItem) => acc + item.price, 0);

    const handleRemoveItem = (id: string) => {
        const currentCartItems = queryClient.getQueryData<CartItem[]>("cart") || [];
        const newCartItems = currentCartItems.filter((item) => item.id !== id);
        queryClient.setQueryData("cart", newCartItems);
        queryClient.invalidateQueries("cart");
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <SizerToolbar sx={{ width: "250px" }}>
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
    );
};

export default Cart;