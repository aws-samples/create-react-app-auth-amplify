import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({ uri: "http://localhost:4300/graphql" });
const link = ApolloLink.from([httpLink]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  });

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
