import React, { useState } from "react";
import "./Forms.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { create_user } from "../../app/actions";
import {
  Box,
  ListIcon,
  ListItem,
  List,
  MdCheckCircle,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";

function Forms() {
  const [isSmallerThan] = useMediaQuery("(min-width: 500px)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
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
    <Box bg="#24244D" p={isSmallerThan ? "4" : "20"}>
      {" "}
      <div className="login">
        <form className="login--form">
          <h1> Signup Here</h1>
          <input
            type="name"
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={(e) => handleSubmit(e)} className="submit--btn">
            {" "}
            Signup
          </button>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Button mt="3" ml="150" rounded="full" size="sm" bg="hotpink">
              {" "}
              Home
            </Button>
          </Link>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {state.userData.name}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              {state.userData.email}
            </ListItem>
          </List>
        </form>
      </div>
    </Box>
  );
}

export default Forms;
