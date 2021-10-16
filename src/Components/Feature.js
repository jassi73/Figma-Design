import React from "react";

import {
  Stack,
  HStack,
  VStack,
  Box,
  StarIcon,
  Badge,
  Image,
  Heading,
  Flex,
  children,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

function Features() {
  const [isSmallerThan] = useMediaQuery("(min-width: 500px)");
  const property = [
    {
      imageUrl: "https://bit.ly/3BFk4hF",
      imageUr2: "https://bit.ly/3BCvxi1",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3v8jt5G",
      imageUr2: "https://bit.ly/3v8soEq",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/2YIcyEi",
      imageUr2: "https://bit.ly/3lGGwkU",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3AEJATc",
      imageUr2: "https://bit.ly/3aDo3PW",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3aCGHYs",
      imageUr2: "https://bit.ly/3AIgxhr",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3aCGHYs",
      imageUr2: "https://bit.ly/3AIgxhr",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3AR9Xp7",
      imageUr2: "https://bit.ly/3p2tlNA",
      imageAlt: "",
    },
  ];

  return (
    <Flex
      justifyContent="space-evenly"
      direction={["column", "column", "row", "row"]}
    >
      <Box
        maxW="xs"
        // w="20%"
        w={isSmallerThan ? "20%" : ""}
        ml={isSmallerThan ? "9" : "12"}
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
          w="160px"
          h="100px"
        />

        <Box p="2">
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
                Solutions
              </Heading>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                @priyankachopra
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
          mt="3"
          ml={isSmallerThan ? "" : "-10"}
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
        maxW={isSmallerThan ? "xs" : "md"}
        ml={isSmallerThan ? "9" : "12"}
        overflow="hidden"
        w={isSmallerThan ? "20%" : ""}
        ml={isSmallerThan ? "9" : "12"}
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
          w="160px"
          h="100px"
        />

        <Box p="2">
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
                Buckinghamshire
              </Heading>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                @Shad2
              </Box>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                generating
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex
          justifyContent="space-evenly"
          mt="3"
          ml={isSmallerThan ? "" : "-10"}
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
          w="160px"
          h="100px"
        />

        <Box p="2">
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
                Gloves
              </Heading>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                @Nikko.Harris
              </Box>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                Program
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex
          justifyContent="space-evenly"
          mt="3"
          ml={isSmallerThan ? "" : "-10"}
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
          w="160px"
          h="100px"
        />

        <Box p="2">
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
                Metrics
              </Heading>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                @Catherine_Hyatt9
              </Box>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                expedite
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex
          justifyContent="space-evenly"
          mt="3"
          ml={isSmallerThan ? "" : "-10"}
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
          w="160px"
          h="100px"
        />

        <Box p="2">
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
                Focused
              </Heading>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                @Emie29
              </Box>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                Bedfordshire
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex
          justifyContent="space-evenly"
          mt="3"
          ml={isSmallerThan ? "" : "-10"}
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
          w="160px"
          h="100px"
        />

        <Box p="2">
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
                Practical
              </Heading>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                @Royce20
              </Box>

              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="10"
                ml="0"
              >
                Automotive
              </Box>
            </Box>
          </Box>
        </Box>
        <Flex
          justifyContent="space-evenly"
          mt="3"
          ml={isSmallerThan ? "" : "-10"}
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

export default Features;
