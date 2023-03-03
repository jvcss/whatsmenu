import { Product } from "../types/Product";
import { v4 as uuidv4 } from 'uuid';
import { CartItem } from "../types/Cart";

import { Grid } from "@mui/material";
import ProductsList from "../components/ProductsList";
import BrandInfo from "../components/BrandInfo";
import { useMutation, useQuery, useQueryClient } from "react-query";

function Home() {
    const queryClient = useQueryClient();

    // READ the cardapio
    const { isLoading, error, data: cardapio } = useQuery<Product[]>(
        "cardapio",
        async () => {
            const response = await fetch("/api/cardapio");
            return response.json();
        }
    );

    // INSERT to cart
    const { mutate: addToCartMutation } = useMutation(
        async (product: Product) => {
            const cartItem: CartItem = {
                id: uuidv4(),
                name: product.name,
                price: product.price,
            };

            // Get the current cart items from the cache
            const currentCartItems = queryClient.getQueryData<CartItem[]>("cart") || [];

            // Add the new item to the cart
            const newCartItems = [...currentCartItems, cartItem];

            // Update the cart items in the cache
            queryClient.setQueryData("cart", newCartItems);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("cart");
            },
        }
    );

    return (
        <div>
            <BrandInfo />
            <main>
                <h2>Horário de funcionamento:</h2>
                <p>
                    De segunda a sexta, das 11h às 23h. Sábados, domingos e feriados, das
                    12h às 22h.
                </p>
                <h2>Cardápio:</h2>
                {isLoading && <div>Loading cardapio...</div>}
                {/*error && typeof error !== 'undefined' && <div>Error: {error.message}</div>*/}
                {cardapio && (
                    <ProductsList products={cardapio} addToCart={addToCartMutation} />
                )}
            </main>
        </div>
    );
}

export default Home;
