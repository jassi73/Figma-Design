import React from "react";
import {
  Box,
  Heading,
  Flex,
  Image,
  Text,
  Divider,
  Container,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { MdCalendarToday, MdOutlineHeadphones } from "react-icons/md";

function Banner() {
  const [isSmallerThan] = useMediaQuery("(min-width: 500px)");
  return (
    <Flex
      bg="#2D3166"
      boxShadow="md"
      // bg={isSmallerThan ? "#2D3166" : "#2D3166"}
      w={isSmallerThan ? "100%" : "100%"}
      p={isSmallerThan ? "3" : "4"}
      h="100%"
      justifyContent="space-around"
      direction={["column", "column", "column", "row"]}
    >
      <Box
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.07)",
          transition: ".5s ease-out",
        }}
      >
        <Box display="flex" mt="2">
          <Box>
            <Image
              src="https://bit.ly/2ZFIBWt "
              alt=""
              borderRadius="20"
              w="90px"
              h="90px"
              rounded="full"
            />
          </Box>
          <Box display="" pl="4" mt="2">
            <Flex ml="0">
              <Text color="#794192" mt="1">
                @{" "}
              </Text>
              <Heading color="#D3D0E8" fontSize="20px" fontWeight="semibold">
                {" "}
                priyankachopra
              </Heading>
            </Flex>
            <Flex>
              <Text
                color="white"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="12"
                ml="0"
                mt="1"
              >
                5M
              </Text>
              <Divider orientation="vertical"></Divider>
              <Divider orientation="vertical"></Divider>
              <Divider orientation="vertical"></Divider>
              <Divider orientation="vertical"></Divider>
              <Divider orientation="vertical"></Divider>
              <Text
                color="#D3D0E8"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="12"
                ml="0"
                mt="1"
              >
                Subscriber
              </Text>
            </Flex>

            <Text
              color="#6D61A2"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="15"
              Align="Left"
              ml="0"
              mt="1"
            >
              Entertainment
            </Text>
          </Box>
        </Box>
        <Flex mt="3" fontWeight="semibold" color="#6D61A2">
          <MdCalendarToday /> <Divider orientation="vertical"></Divider>
          <Divider orientation="vertical"></Divider>
          <Text mt="-1">12/12/2020 | 16:00 </Text>
        </Flex>
        <Text mt="-3" fontWeight="semibold" color="#D3D0E8" fontSize="40px">
          {" "}
          Indexing Quetzal
        </Text>
        <Container color="#D3D0E8" ml="-4" fontWeight="semibold" w="100vw">
          Lorem temporibus sapiente ea ad ipsa aadipis voluptas ratione.
          Suscipit debitis nostrum doloribus dolorum. Nisi quia ut sed quibusdam
          reiciendis voluptatibus et.
        </Container>
        <Flex justifyContent="space-between">
          <Button bg="#794192" rounded="full" size="sm" ml="8" mt="10" p="5">
            VIEW EVENT
          </Button>
          <Flex
            color="#D3D0E8"
            fontSize="15"
            fontWeight="normal"
            mt="53px"
            mr="16"
          >
            <MdOutlineHeadphones color="orange" />{" "}
            <Text mt="-1" mr="100px">
              100 UTOOS{" "}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Image
        src="https://bit.ly/3nPq9Cu"
        alt=""
        borderRadius="15"
        w="600px"
        h="350px"
        mt={isSmallerThan ? "3" : "10"}
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.07)",
          transition: ".5s ease-out",
        }}
      />
    </Flex>
  );
}

export default Banner;
