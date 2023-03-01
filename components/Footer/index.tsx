import { styled } from "@mui/material";

const FooterRoot = styled("footer")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "64px",
  backgroundColor: "#f5f5f5",
});

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
