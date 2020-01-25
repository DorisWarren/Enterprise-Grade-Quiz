
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';


import * as serviceWorker from './serviceWorker';


import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

const cache = new InMemoryCache()
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://assessment.staging.enterprisegrade.io/graphql'
  })
})





ReactDOM.render(  
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
serviceWorker.unregister();


