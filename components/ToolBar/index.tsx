import { Toolbar, styled } from "@mui/material";
import React from "react";

const SizerToolbarRoot = styled(Toolbar)(({ theme }) => ({
  width: "250px",
  flexShrink: 0,
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100px",
  },
}));

type Props = {
  children: React.ReactNode;
  sx?: any;
};

const SizerToolbar = ({ children, sx }: Props) => {
  return <SizerToolbarRoot sx={sx}>{children}</SizerToolbarRoot>;
};

export default SizerToolbar;
