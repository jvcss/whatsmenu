import { styled } from "@mui/material";

const FooterRoot = styled("footer")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "64px",
  backgroundColor: theme.palette.background.default,
}));

const FooterText = styled("p")({
  fontSize: "0.8rem",
});

const Footer = () => {
  return (
    <FooterRoot>
      <FooterText>JVCSS© 2023 Next E-commerce</FooterText>
    </FooterRoot>
  );
};

export default Footer;
