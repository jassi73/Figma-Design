import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { create_user } from "../app/actions";
import { MdSearch } from "react-icons/md";

import {
  InputRightElement,
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
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

import { MdOutlineExpandMore, MdMenu } from "react-icons/md";

function Navbar() {
  const [isSmallerThan] = useMediaQuery("(min-width: 500px)");
  const { toggleColorMode } = useColorMode();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const state = useSelector((state) => state);
  console.log("state", state);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(create_user(data));
  };

  return (
    <>
      <Box bg={isSmallerThan ? "#2D3166" : "#2D3166"}>
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
        bg={isSmallerThan ? "#2D3166" : "#2D3166"}
        w={isSmallerThan ? "100%" : "0px"}
        h={isSmallerThan ? "60px" : "0px"}
      >
        <Text
          colorScheme="white"
          h="40px"
          color="#D3D0E8"
          p="4"
          fontWeight="semibold"
          fontSize="xl"
          visibility={isSmallerThan ? "visible" : "hidden"}
        >
          UTOOTS
        </Text>
        <Flex
          visibility={isSmallerThan ? "visible" : "hidden"}
          justifyContent="space-around"
          bg="#2D3166"
        >
          <Button
            variant="link"
            rightIcon={<mdChevronDownIcon />}
            mt="1"
            color="#D3D0E8"
            size="sm"
            ml="5"
            w="100px"
          >
            Feature Events
          </Button>

          <Button
            variant="link"
            mt="1"
            ml="5"
            color="#D3D0E8"
            w="90px"
            size="sm"
          >
            Popular Events
          </Button>
          {/* <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<MdOutlineExpandMore />}
                  variant="link"
                  mt="1"
                  color="#D3D0E8"
                  size="md"
                >
                  {isOpen ? "Categories" : "Categories"}
                </MenuButton>
                <MenuList
                  bg="#2C3266"
                  color="whiteAlpha.600"
                  fontWeight="light"
                >
                  <MenuItem>Chatting</MenuItem>
                  <MenuItem>Comedy</MenuItem>
                  <MenuItem>Entertainment</MenuItem>
                  <MenuItem>Gaming</MenuItem>
                  <MenuItem>Lifestyle</MenuItem>

                  <MenuItem>Music</MenuItem>
                </MenuList>
              </>
            )}
          </Menu> */}
          <Menu isLazy variant="brand" autoSelect={false}>
            <MenuButton
              // rightIcon={<MdOutlineExpandMore />}
              variant="link"
              colorScheme="white"
              as={Button}
              color="#D3D0E8"
              fontWeight="semibold"
              w="150px"
              ml="-2"
              size="sm"
            >
              Categories{" "}
              <MenuButton mt="1" color="#D3D0E8" size="md">
                <MdOutlineExpandMore />
              </MenuButton>
            </MenuButton>

            <MenuList
              fontWeight="light"
              fontSize="xs"
              bg="#2C3266"
              color="#D3D0E8"
              borderColor="#6A62A5"
            >
              <MenuItem _hover={{ bg: "#3D4272" }} fontWeight="semibold">
                Chatting
              </MenuItem>
              <MenuItem _hover={{ bg: "#3D4272" }} fontWeight="semibold">
                Comedy
              </MenuItem>
              <MenuItem _hover={{ bg: "#3D4272" }} fontWeight="semibold">
                Entertainment
              </MenuItem>
              <MenuItem _hover={{ bg: "#3D4272" }} fontWeight="semibold">
                Gaming
              </MenuItem>
              <MenuItem _hover={{ bg: "#3D4272" }} fontWeight="semibold">
                Lifestyle
              </MenuItem>
              <MenuItem _hover={{ bg: "#3D4272" }} fontWeight="semibold">
                Music
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <InputGroup
          size="xs"
          w="100%"
          p="3"
          visibility={isSmallerThan ? "visible" : "hidden"}
        >
          <Input
            variant="unstyled"
            rounded="full"
            bg="#24244D"
            placeholder="Search Events/Stream"
            color="whiteAlpha.900"
            p="4"
            ml="-4"

            // w="450px"
          />
          <InputRightElement
            children={<MdSearch color="gray" size="23" />}
            mt="5"
            mr="9"
          />
        </InputGroup>

        <Stack
          direction="row"
          spacing={4}
          p="3"
          visibility={isSmallerThan ? "visible" : "hidden"}
        >
          <Button
            borderRadius="19"
            size="sm"
            // onClick={onOpen}
            bg="#3D4272"
            colorScheme="whiteAlpha"
            p="4"
            w="80px"
            ml="-5"
          >
            Login
          </Button>

          <Button
            onClick={onOpen}
            borderRadius="19"
            size="sm"
            bg="#794192"
            colorScheme="purple"
            p="4"
            w="80px"
          >
            Signup
          </Button>
          <Menu isLazy closeOnBlur autoSelect={false}>
            <MenuButton
              variant="link"
              color="#D3D0E8"
              size="md"
              bg="whiteAlpha.200"
              rounded="full"
              h="33px"
              mt="1"
            >
              <MdOutlineExpandMore color="white" size="25" />
            </MenuButton>
            <MenuList
              bg="#2C3266"
              colorScheme="whiteAlpha"
              fontWeight="light"
              fontSize="xs"
              color="#D3D0E8"
              borderColor="#6A62A5"
            >
              <MenuItem _hover={{ bg: "#3D4272" }} fontWeight="semibold">
                {" "}
                Language
              </MenuItem>
              <MenuItem _hover={{ bg: "#3D4272" }} fontWeight="semibold">
                FAQ
              </MenuItem>
              <MenuItem _hover={{ bg: "#3D4272" }} fontWeight="semibold">
                Privacy Policy
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <MdOutlineExpandMore color="#6D61A2" size="25" /> */}
        </Stack>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          boxShadow="md"
          size="xs"
        >
          <ModalOverlay />
          <ModalContent bg="#2D3166" p="6">
            <ModalHeader color="whiteAlpha.500">
              Create your account
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input
                  ref={initialRef}
                  placeholder="Full name"
                  variant="unstyled"
                  rounded="full"
                  bg="#24244D"
                  color="whiteAlpha.500"
                  size="xs"
                  p="3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <Input
                  placeholder="Email"
                  value={email}
                  variant="unstyled"
                  rounded="full"
                  bg="#24244D"
                  color="whiteAlpha.500"
                  size="xs"
                  p="3"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel> </FormLabel>
                <Input
                  placeholder="Password"
                  value={password}
                  variant="unstyled"
                  rounded="full"
                  bg="#24244D"
                  color="whiteAlpha.500"
                  size="xs"
                  p="3"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel> </FormLabel>
                <Input
                  placeholder=" Confirm Password"
                  value={password}
                  variant="unstyled"
                  rounded="full"
                  bg="#24244D"
                  color="whiteAlpha.500"
                  size="xs"
                  p="3"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent="center">
              <Button
                colorScheme="blue"
                color="whiteAlpha.700"
                bg="#24244D"
                mr={3}
                onClick={(e) => handleSubmit(e)}
                textDecorationStyle="unset"
              >
                Signup
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          boxShadow="md"
          size="xs"
        >
          <ModalOverlay />
          <ModalContent bg="#2D3166" p="6">
            <ModalHeader color="whiteAlpha.500">
              Create your account
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input
                  ref={initialRef}
                  placeholder="Full name"
                  variant="unstyled"
                  rounded="full"
                  bg="#24244D"
                  color="whiteAlpha.500"
                  size="xs"
                  p="3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <Input
                  placeholder="Email"
                  value={email}
                  variant="unstyled"
                  rounded="full"
                  bg="#24244D"
                  color="whiteAlpha.500"
                  size="xs"
                  p="3"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel> </FormLabel>
                <Input
                  placeholder="Password"
                  value={password}
                  variant="unstyled"
                  rounded="full"
                  bg="#24244D"
                  color="whiteAlpha.500"
                  size="xs"
                  p="3"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel> </FormLabel>
                <Input
                  placeholder=" Confirm Password"
                  value={password}
                  variant="unstyled"
                  rounded="full"
                  bg="#24244D"
                  color="whiteAlpha.500"
                  size="xs"
                  p="3"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent="center">
              <Button
                colorScheme="blue"
                color="whiteAlpha.700"
                bg="#24244D"
                mr={3}
                onClick={(e) => handleSubmit(e)}
                textDecorationStyle="unset"
              >
                Signup
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    </>
  );
}

export default Navbar;
