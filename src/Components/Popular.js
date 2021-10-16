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
      imageUrl: "https://bit.ly/3FHFhKq",
      imageUr2: "https://bit.ly/3BLptE4",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3AAiBbn",
      imageUr2: "https://bit.ly/3aDo3PW",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3p17oyd",
      imageUr2: "https://bit.ly/3p17gid",
      imageAlt: "",
    },
    {
      imageUrl: "https://bit.ly/3FLTmGH",
      imageUr2: "https://bit.ly/3aDo3PW",
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
    {
      imageUrl: "https://bit.ly/3lGWiME",
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
        ml="9"
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

export default Popular;
