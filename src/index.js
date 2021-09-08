import React from "react";
import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom";
import Client from "./Apollo/Client";
import App from "./Components/App";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
