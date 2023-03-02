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

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";


import styles from "../../styles/Header.module.css";


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const StyledLogo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(1),
  },
}));

const StyledShoppingCart = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(1),
  },
}));

type Props = {
  carrinho: any[];
  cartTotal: number;
};

function Header({ carrinho, cartTotal }: Props) {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledLogo>
          <Image
            src="/vercel.svg"
            alt="Logo do restaurante"
            width={150}
            height={150}
          />
          <h1>Bia Restaurent</h1>
        </StyledLogo>

        <div className={styles.social}>
          <IconButton
            color="inherit"
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </IconButton>
        </div>

        <StyledShoppingCart>
          <Link href="/cart">
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
            ({carrinho.length} itens - R$ {cartTotal.toFixed(2)})
          </Link>
        </StyledShoppingCart>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
