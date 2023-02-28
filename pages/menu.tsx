import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Menu.module.css';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

type Props = {
    cardapio: Product[];
}

function Menu({ cardapio }: Props) {
    const [theme, setTheme] = useState('light');
    const [carrinho, setCarrinho] = useState<Product[]>([]);
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    const addToCart = (product: Product) => setCarrinho([...carrinho, product]);
    const cartTotal = carrinho.reduce((total, product) => total + product.price, 0);

    return  (
        <div className={`${styles.container} ${theme === 'dark' ? styles.dark : ''}`}>
      <Head>
        <title>Menu do Restaurante</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Logo do restaurante" width={150} height={150} />
          <h1>Nome do Restaurante</h1>
        </div>
        <div className={styles.social}>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div className={styles.theme}>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} onClick={toggleTheme} />
        </div>
        <div className={styles.cart}>
          <Link href="/carrinho">
            <a>
              <FontAwesomeIcon icon={faShoppingCart} /> ({carrinho.length} itens - R$ {cartTotal.toFixed(2)})
            </a>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <h2>Horário de funcionamento:</h2>
        <p>De segunda a sexta, das 11h às 23h. Sábados, domingos e feriados, das 12h às 22h.</p>
        <h2>Cardápio:</h2>
        <ul className={styles.cardapio}>
          {cardapio.map((product) => (
            <li key={product.id} className={styles.produto}>
              <Image src={product.image} alt={`Foto de ${product.name}`} width={150} height={150} />
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>R$ {product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>

    )

}
export default Menu;