import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box padding={5}>
      <Navbar></Navbar>
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exists"
          : "An unexpected error ocurred"}
      </Text>
    </Box>
  );
};

export default ErrorPage;
