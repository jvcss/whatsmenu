import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { styled } from "@mui/material/styles";

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

function BrandInfo() {
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
        
      </Toolbar>
    </StyledAppBar>
  );
}

export default BrandInfo;
{/*
        <div className={styles.social}>
          <IconButton
            color="inherit"
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </IconButton>
        </div>

        <StyledShoppingCart>
          <Link href="/cart">
            {cart && cartTotal ? (
              <Typography>({cart.length} itens - R$ {cartTotal.toFixed(2)})</Typography>
            ) :
              <Typography>0 itens - R$ 0,0</Typography>
            }

            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>

          </Link>
        </StyledShoppingCart>
        */}