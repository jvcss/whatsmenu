import { styled } from "@mui/material/styles";
import Image from "next/image";
import bannerImage from "../../../../public/banner.jpg";

const BannerImage = styled(Image)({
  width: "100%",
  height: "auto",
  display: "block",
  margin: "0 auto",
  borderRadius: "15px",
  maxWidth: 1366,
  paddingTop: "5px",
});

const BannerContainer = styled("div")(({ theme }) => ({
  position: "relative",
 
}));

const HeaderMerchantBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={bannerImage} alt="Banner" />
    </BannerContainer>
  );
};

export default HeaderMerchantBanner;