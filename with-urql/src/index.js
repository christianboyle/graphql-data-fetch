import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'https://api.spacex.land/graphql/',
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  rootElement
);
