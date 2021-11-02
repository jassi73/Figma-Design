import React from "react";
import {
  Stack,
  HStack,
  VStack,
  Box,
  Button,
  StarIcon,
  Badge,
  Image,
  Heading,
  Flex,
  children,
  useMediaQuery,
} from "@chakra-ui/react";

function Popular() {
  const [isSmallerThan] = useMediaQuery("(min-width: 500px)");
  const property = [
    {
      imageUrl: "https://bit.ly/3mvO5LU",
      imageUr2: "https://bit.ly/31lAUVL",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3kgsTYX",
      imageUr2: "https://bit.ly/31a8vlh",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3jXa4tl",
      imageUr2: "https://bit.ly/3BBfyAa",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3BBxU43",
      imageUr2: "https://bit.ly/3bt4BG8",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3CAL5U9",
      imageUr2: "https://bit.ly/2Y4WlsO",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3btsVro",
      imageUr2: "https://bit.ly/3jWh4Xk",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3nFMAKg",
      imageUr2: "https://bit.ly/3AIgxhr",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3DEhJ7l",
      imageUr2: "https://bit.ly/3lGGwkU",
      imageAlt: "",
    },
  ];

  return (
    <Flex
      justifyContent="space-around"
      direction={["column", "column", "row", "row"]}
    >
      <Box
        maxW="xs"
        w={isSmallerThan ? "20%" : ""}
        ml={isSmallerThan ? "9" : "12"}
        ml="2"
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.07)",
          transition: ".5s ease-out",
        }}
      >
        <Image
          src={property[0].imageUrl}
          alt={property.imageAlt}
          borderRadius="8"
          w={isSmallerThan ? "180px" : "600px"}
          h={isSmallerThan ? "140px" : "200px"}
        />

        <Box p="1" h="12">
          <Box display="flex">
            <Box>
              <Image
                src={property[0].imageUr2}
                alt={property.imageAlt}
                borderRadius="20"
                w="30px"
                h="30px"
              />
            </Box>
            <Box display="" pl="2">
              <Heading color="#D3D0E8" fontSize="15px" fontWeight="semibold">
                {" "}
                Devolved
              </Heading>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                @Lionel_Reynolds
              </Box>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                Toys
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex
          justifyContent="space-evenly"
          mt={isSmallerThan ? "3" : "3"}
          ml={isSmallerThan ? "" : "-5"}
        >
          <Button
            bg="#6D61A2"
            colorScheme="white"
            rounded="full"
            p="3"
            size="xs"
            fontWeight="light"
          >
            Producer
          </Button>
          <Button
            bg="#6D61A2"
            colorScheme="white"
            rounded="full"
            p="3"
            size="xs"
            fontWeight="light"
          >
            Palm
          </Button>
        </Flex>
      </Box>
      <Box
        maxW="xs"
        overflow="hidden"
        w={isSmallerThan ? "20%" : ""}
        ml={isSmallerThan ? "9" : "12"}
        ml="2"
        mt={isSmallerThan ? "" : "6"}
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.07)",
          transition: ".5s ease-out",
        }}
      >
        <Image
          src={property[1].imageUrl}
          alt={property.imageAlt}
          borderRadius="8"
          w={isSmallerThan ? "180px" : "600px"}
          h={isSmallerThan ? "140px" : "200px"}
        />

        <Box p="2" h="12">
          <Box display="flex">
            <Box>
              <Image
                src={property[1].imageUr2}
                alt={property.imageAlt}
                borderRadius="20"
                w="30px"
                h="30px"
              />
            </Box>
            <Box display="" pl="2">
              <Heading color="#D3D0E8" fontSize="15px" fontWeight="semibold">
                {" "}
                calculating
              </Heading>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                @Haskell.OConner
              </Box>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                Strategist
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex
          justifyContent="space-evenly"
          mt={isSmallerThan ? "3" : "3"}
          ml={isSmallerThan ? "" : "-5"}
        >
          <Button
            bg="#6D61A2"
            colorScheme="white"
            rounded="full"
            p="3"
            size="xs"
            fontWeight="light"
          >
            Producer
          </Button>
          <Button
            bg="#6D61A2"
            colorScheme="white"
            rounded="full"
            p="3"
            size="xs"
            fontWeight="light"
          >
            Palm
          </Button>
        </Flex>
      </Box>
      <Box
        maxW="xs"
        overflow="hidden"
        w={isSmallerThan ? "20%" : ""}
        ml={isSmallerThan ? "9" : "12"}
        mt={isSmallerThan ? "" : "6"}
        ml="2"
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.07)",
          transition: ".5s ease-out",
        }}
      >
        <Image
          src={property[2].imageUrl}
          alt={property.imageAlt}
          borderRadius="8"
          w={isSmallerThan ? "180px" : "600px"}
          h={isSmallerThan ? "140px" : "200px"}
        />

        <Box p="2" h="12">
          <Box display="flex">
            <Box>
              <Image
                src={property[2].imageUr2}
                alt={property.imageAlt}
                borderRadius="20"
                w="30px"
                h="30px"
              />
            </Box>
            <Box display="" pl="2">
              <Heading color="#D3D0E8" fontSize="15px" fontWeight="semibold">
                {" "}
                deliverables
              </Heading>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                @Dallin3
              </Box>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                Human
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex
          justifyContent="space-evenly"
          mt={isSmallerThan ? "3" : "3"}
          ml={isSmallerThan ? "" : "-5"}
        >
          <Button
            bg="#6D61A2"
            colorScheme="white"
            rounded="full"
            p="3"
            size="xs"
            fontWeight="light"
          >
            Producer
          </Button>
          <Button
            bg="#6D61A2"
            colorScheme="white"
            rounded="full"
            p="3"
            size="xs"
            fontWeight="light"
          >
            Palm
          </Button>
        </Flex>
      </Box>
      <Box
        maxW="xs"
        overflow="hidden"
        w={isSmallerThan ? "20%" : ""}
        ml={isSmallerThan ? "9" : "12"}
        mt={isSmallerThan ? "" : "6"}
        ml="2"
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.07)",
          transition: ".5s ease-out",
        }}
      >
        <Image
          src={property[3].imageUrl}
          alt={property.imageAlt}
          borderRadius="8"
          w={isSmallerThan ? "180px" : "600px"}
          h={isSmallerThan ? "140px" : "200px"}
        />

        <Box p="2" h="12">
          <Box display="flex">
            <Box>
              <Image
                src={property[3].imageUr2}
                alt={property.imageAlt}
                borderRadius="20"
                w="30px"
                h="30px"
              />
            </Box>
            <Box display="" pl="2">
              <Heading color="#D3D0E8" fontSize="15px" fontWeight="semibold">
                {" "}
                Ouguiya
              </Heading>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                @Princess48
              </Box>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                Latvia
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex
          justifyContent="space-evenly"
          mt={isSmallerThan ? "3" : "3"}
          ml={isSmallerThan ? "" : "-5"}
        >
          <Button
            bg="#6D61A2"
            colorScheme="white"
            rounded="full"
            p="3"
            size="xs"
            fontWeight="light"
          >
            Producer
          </Button>
          <Button
            bg="#6D61A2"
            colorScheme="white"
            rounded="full"
            p="3"
            size="xs"
            fontWeight="light"
          >
            Palm
          </Button>
        </Flex>
      </Box>
      <Box
        maxW="xs"
        overflow="hidden"
        w={isSmallerThan ? "20%" : ""}
        ml={isSmallerThan ? "9" : "12"}
        mt={isSmallerThan ? "" : "6"}
        ml="2"
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.07)",
          transition: ".5s ease-out",
        }}
      >
        <Image
          src={property[4].imageUrl}
          alt={property.imageAlt}
          borderRadius="8"
          w={isSmallerThan ? "180px" : "600px"}
          h={isSmallerThan ? "140px" : "200px"}
        />

        <Box p="2" h="12">
          <Box display="flex">
            <Box>
              <Image
                src={property[4].imageUr2}
                alt={property.imageAlt}
                borderRadius="20"
                w="30px"
                h="30px"
              />
            </Box>
            <Box display="" pl="2">
              <Heading color="#D3D0E8" fontSize="15px" fontWeight="semibold">
                {" "}
                Jogging
              </Heading>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                @Herman44
              </Box>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                salad
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex
          justifyContent="space-evenly"
          mt={isSmallerThan ? "3" : "3"}
          ml={isSmallerThan ? "" : "-5"}
        >
          <Button
            bg="#6D61A2"
            colorScheme="white"
            rounded="full"
            p="3"
            size="xs"
            fontWeight="light"
          >
            Producer
          </Button>
          <Button
            bg="#6D61A2"
            colorScheme="white"
            rounded="full"
            p="3"
            size="xs"
            fontWeight="light"
          >
            Palm
          </Button>
        </Flex>
      </Box>
      <Box
        maxW="xs"
        overflow="hidden"
        w={isSmallerThan ? "20%" : ""}
        ml={isSmallerThan ? "9" : "12"}
        mt={isSmallerThan ? "" : "6"}
        ml="2"
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.07)",
          transition: ".5s ease-out",
        }}
      >
        <Image
          src={property[5].imageUrl}
          alt={property.imageAlt}
          borderRadius="8"
          w={isSmallerThan ? "180px" : "600px"}
          h={isSmallerThan ? "140px" : "200px"}
        />

        <Box p="2" h="12">
          <Box display="flex">
            <Box>
              <Image
                src={property[5].imageUr2}
                alt={property.imageAlt}
                borderRadius="20"
                w="30px"
                h="30px"
              />
            </Box>
            <Box display="" pl="2">
              <Heading color="#D3D0E8" fontSize="15px" fontWeight="semibold">
                {" "}
                Consultant
              </Heading>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                @Rosina.Hegmann
              </Box>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                Synthesize
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex
          justifyContent="space-evenly"
          mt={isSmallerThan ? "3" : "3"}
          ml={isSmallerThan ? "" : "-5"}
        >
          <Button
            bg="#6D61A2"
            colorScheme="white"
            rounded="full"
            p="3"
            size="xs"
            fontWeight="light"
          >
            Producer
          </Button>
          <Button
            bg="#6D61A2"
            colorScheme="white"
            rounded="full"
            p="3"
            size="xs"
            fontWeight="light"
          >
            Palm
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Popular;
