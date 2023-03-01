import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/Header.module.css";

type Props = {
  carrinho: any[];
  cartTotal: number;
  theme: string;
  toggleTheme: () => void;
};

function Header({ carrinho, cartTotal, theme, toggleTheme }: Props) {
  return (
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
            <FontAwesomeIcon icon={faShoppingCart} /> ({carrinho.length} itens - R$ {cartTotal.toFixed(2)})
        </Link>
      </div>
    </header>
  );
}

export default Header;
