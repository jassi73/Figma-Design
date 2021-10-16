import React from "react";
import { ChevronDownIcon } from "react-icons/md";
import { Link } from "react-router-dom";

import {
  Stack,
  Box,
  Input,
  InputGroup,
  Button,
  Text,
  Flex,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import { MdOutlineExpandMore, MdMenu } from "react-icons/md";

function Navbar() {
  const [isSmallerThan] = useMediaQuery("(min-width: 500px)");

  return (
    <>
      <Box bg={isSmallerThan ? "#2D3166" : "#2D3166"} p="2">
        <Menu bg="#000">
          {({ isOpen }) => (
            <>
              <MenuButton
                as={Button}
                display={isSmallerThan ? "none" : "visible"}
                bg="#2D3166"
                size="xs"
              >
                {isOpen ? "close" : <MdMenu color="white" size="md" />}
              </MenuButton>
              <MenuList bg="#2D3166">
                <MenuItem>Featured events</MenuItem>
                <MenuItem>Popular events</MenuItem>
                <MenuItem>Categories</MenuItem>
                <MenuItem>
                  <Flex justifyContent="space-between" p="1">
                    <Link to="/signup">
                      <Button size="xs" rounded="full" bg="#794192">
                        {" "}
                        Signup
                      </Button>
                    </Link>
                    <Divider orientation="vertical" />
                    <Divider orientation="vertical" />
                    <Divider orientation="vertical" />
                    <Divider orientation="vertical" />
                    <Divider orientation="vertical" />
                    <Divider orientation="vertical" />
                    <Divider orientation="vertical" />
                    <Link to="/signup">
                      <Button size="xs" rounded="full" bg="#794192">
                        {" "}
                        Signup
                      </Button>
                    </Link>
                  </Flex>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
      <Stack
        direction={["column", "row"]}
        spacing="20px"
        bg={isSmallerThan ? "#2D3166" : "#2D3166"}
        w={isSmallerThan ? "100%" : "0px"}
        h={isSmallerThan ? "60px" : "0px"}
      >
        <Text
          colorScheme="white"
          w="50%"
          h="40px"
          color="#D3D0E8"
          p="4"
          fontWeight="semibold"
          size="md"
          fontSize="xl"
          visibility={isSmallerThan ? "visible" : "hidden"}
          mt="-1"
        >
          UTOOS
        </Text>
        <Flex ml="10px" visibility={isSmallerThan ? "visible" : "hidden"}>
          <Menu size="sm">
            <MenuButton
              bg="#2D3166"
              as={Button}
              rightIcon={<mdChevronDownIcon />}
              mt="2"
              color="#D3D0E8"
            >
              Feature Events
            </MenuButton>
          </Menu>
          <Menu size="sm">
            <MenuButton
              bg="#2D3166"
              as={Button}
              rightIcon={<mdChevronDownIcon />}
              mt="2"
              color="#D3D0E8"
            >
              Popular Events
            </MenuButton>
          </Menu>
          <Menu size="sm">
            <MenuButton
              bg="#2D3166"
              as={Button}
              rightIcon={<MdOutlineExpandMore color="#6D61A2" size="25" />}
              mt="2"
              color="#D3D0E8"
            >
              Categories
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <InputGroup
          size="sm"
          w="100%"
          p="3"
          mr="200"
          visibility={isSmallerThan ? "visible" : "hidden"}
        >
          <Input
            rounded="full"
            bg="#24244D"
            placeholder="Search Events/Stream"
            color="white"
          />
        </InputGroup>

        <Stack
          direction="row"
          spacing={4}
          p="3"
          visibility={isSmallerThan ? "visible" : "hidden"}
        >
          <Button colorScheme="teal" variant="outline" size="sm" rounded="full">
            Login
          </Button>
          <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
            <Button bg="#794192" rounded="full" size="sm">
              Signup
            </Button>
          </Link>
          <MdOutlineExpandMore color="#6D61A2" size="25" />
        </Stack>
      </Stack>
    </>
  );
}

export default Navbar;
