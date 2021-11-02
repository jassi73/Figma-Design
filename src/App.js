import React from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Banner from "./Components/Banner";
import { Box, Divider } from "@chakra-ui/layout";

function App() {
  return (
    <Box bg="#2D3166">
      <Navbar />
      <Divider borderColor="gray.600" />
      <Banner />
      <Body />
    </Box>
  );
}

export default App;
