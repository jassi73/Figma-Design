import React from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Banner from "./Components/Banner";
import { Divider } from "@chakra-ui/layout";

function App() {
  return (
    <>
      <Navbar />
      <Divider colorScheme="blackAlpha" />
      <Banner />
      <Body />
    </>
  );
}

export default App;
