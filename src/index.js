import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { store } from "./app/store";
import Forms from "./Components/Form/Forms";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <Router>
        <Route path="/" component={App} exact />
        <Route path="/signup" component={Forms} />
      </Router>
    </ChakraProvider>
  </Provider>,

  document.getElementById("root")
);
