import { Box } from "@mui/material";
import RestaurantContainer from "./RestaurantContainer";
///import DesktopContainerFooter from "./DesktopContainerFooter";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <RestaurantContainer />
    </Box>
  );
};

export default MainLayout;