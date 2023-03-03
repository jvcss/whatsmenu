import { Product } from "../types/Product";

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
                id: product.id,
                name: product.name,
                price: product.price,
            };
            const res = await fetch("/api/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cartItem),
            });

            if (!res.ok) {
                throw new Error("Failed to add item to cart");
            }
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
