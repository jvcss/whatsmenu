import { useState } from "react";

import { Product } from "../../types/Product";
import { Grid } from "@mui/material";
import ProductsList from "../ProductsList";
import Header from "../Header";

type Props = {
  cardapio: Product[];
};


function Menu({ cardapio }: Props) {
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (product: Product) => setCart([...cart, product]);
  const cartTotal = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div>
        <Header carrinho={cart} cartTotal={cartTotal} />
        <main>
          <h2>Horário de funcionamento:</h2>
          <p>
            De segunda a sexta, das 11h às 23h. Sábados, domingos e feriados, das
            12h às 22h.
          </p>
          <h2>Cardápio:</h2>
          <ProductsList products={cardapio} addToCart={addToCart} />
        </main>
      
    </div>
  );
}

export default Menu;
