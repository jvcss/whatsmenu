import { Container } from "@mui/material";
import HeaderMerchantBanner from "./HeaderMerchantBanner";
import HeaderMerchantInfo from "./HeaderMerchantInfo";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantContainer = () => {
  return (
    <Container maxWidth="xl">
      <HeaderMerchantBanner />
      <HeaderMerchantInfo />
      <RestaurantMenu />
    </Container>
  );
};

export default RestaurantContainer;