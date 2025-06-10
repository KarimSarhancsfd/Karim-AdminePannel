import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="GeographyChart Chart" subtitle="Simple GeographyChart Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography ;