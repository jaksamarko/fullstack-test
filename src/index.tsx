import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { config } from "./config";
import "./index.css";

const client = new ApolloClient({
  link: new HttpLink({
    uri: config.tmdb_api_url,
  }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
