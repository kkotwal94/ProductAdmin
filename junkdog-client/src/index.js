import React, { Component } from "react";
import { hydrate } from "react-dom";
import fetch from "cross-fetch";
import { BrowserRouter } from "react-router-dom";
import { HttpLink } from "apollo-link-http";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import red from "@material-ui/core/colors/red";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";
import createRoutes from "./routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import registerServiceWorker from "./registerServiceWorker";

class Main extends Component {
  render() {
    return <BrowserRouter>{routes}</BrowserRouter>;
  }
}

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red
  }
});

const routes = createRoutes();
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "http://localhost:3001/graphql", fetch: fetch })
  // here we're initializing the cache with the data from the server's cache
});

// This query is just a test to make sure its connected to gql

client
  .query({
    query: gql`
      {
        allBrands {
          _id
          name
        }
      }
    `
  })
  .then(result => console.log(result));

// ReactDOM.render(<App />, document.getElementById('root'));
hydrate(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <Main />
      </CssBaseline>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
