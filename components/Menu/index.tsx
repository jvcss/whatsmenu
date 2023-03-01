import { useState } from "react";

import { Product } from "../../types/Product";
import Layout from "../Layout";
import ProductCard from "../ProductCard";
import { Grid } from "@mui/material";

type Props = {
  cardapio: Product[];
};


function Menu({ cardapio }: Props) {
  const [carrinho, setCarrinho] = useState<Product[]>([]);
  const addToCart = (product: Product) => setCarrinho([...carrinho, product]);
  const cartTotal = carrinho.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div>
      <Layout>
        <main>
          <h2>Horário de funcionamento:</h2>
          <p>
            De segunda a sexta, das 11h às 23h. Sábados, domingos e feriados, das
            12h às 22h.
          </p>
          <h2>Cardápio:</h2>
          <Grid container spacing={2}>
            {cardapio.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard
                  product={product}
                  addToCart={addToCart}
                />
              </Grid>
            ))}
          </Grid>
        </main>
      </Layout>
    </div>
  );
}

export default Menu;
