import { Product } from "../types/Product";
import { Grid } from "@mui/material";
import ProductsList from "../components/ProductsList";
import BrandInfo from "../components/BrandInfo";
import { useMutation, useQuery, useQueryClient } from "react-query";

function Home() {
  const queryClient = useQueryClient();

  const { isLoading, error , data: cardapio } = useQuery<Product[]>(
    "cardapio",
    async () => {
      const response = await fetch("/api/cardapio");
      return response.json();
    }
  );

  const { mutate: addToCart } = useMutation(
    async (product: Product) => {
      const res = await fetch("/api/cart.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
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
          <ProductsList products={cardapio} addToCart={addToCart} />
        )}
      </main>
    </div>
  );
}

export default Home;
