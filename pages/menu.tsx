import { useState } from "react";

import { GetStaticProps } from 'next';

import Head from "next/head";
import styles from "../styles/Menu.module.css";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { Product } from "../types/Product";

type Props = {
  cardapio: Product[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch('http://localhost:3000/api/cardapio');
  const menu = await res.json();

  return {
    props: {
      cardapio: menu,
    },
  };
};


function Menu({ cardapio }: Props) {
  const [theme, setTheme] = useState("light");
  const [carrinho, setCarrinho] = useState<Product[]>([]);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const addToCart = (product: Product) => setCarrinho([...carrinho, product]);
  const cartTotal = carrinho.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className={`${styles.container} ${theme === "dark" ? styles.dark : ""}`} >
      <Head> <title>Menu do Restaurante</title> </Head>

      <Header carrinho={carrinho} cartTotal={cartTotal} theme={theme} toggleTheme={toggleTheme} />

      <main className={styles.main}>
        <h2>Horário de funcionamento:</h2>
        <p>
          De segunda a sexta, das 11h às 23h. Sábados, domingos e feriados, das
          12h às 22h.
        </p>
        <h2>Cardápio:</h2>
        <ul className={styles.cardapio}>
          {cardapio.map((product) => (
            <ProductCard product={product} key={product.id} addToCart={addToCart} />
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}


export default Menu;
