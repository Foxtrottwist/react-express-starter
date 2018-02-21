import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { injectGlobal } from 'styled-components';

import App from './App';

// eslint-disable-next-line
injectGlobal`
    * { margin: 0; padding: 0; }
`;

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('app'));
