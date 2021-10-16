import React from "react";
import Features from "./Feature";
import Popular from "./Popular";
import { Box, Heading } from "@chakra-ui/react";

function Body() {
  return (
    <Box bg="#24244D" p="7">
      <Heading color="white" p="5" fontSize="xl">
        {" "}
        Features Events{" "}
      </Heading>
      <Features />
      <Heading color="white" p="5" fontSize="xl">
        {" "}
        Popular Events{" "}
      </Heading>
      <Popular />
    </Box>
  );
}

export default Body;
