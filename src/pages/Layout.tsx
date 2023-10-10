import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

const layout = () => {
  return (
    <div>
      <Navbar />
      <Box padding={5}>
        <Outlet></Outlet>
      </Box>
    </div>
  );
};

export default layout;
