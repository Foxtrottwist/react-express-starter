import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { injectGlobal } from 'styled-components';

import App from './App';

// eslint-disable-next-line
injectGlobal`
    * { margin: 0; padding: 0; }
`;

const client = new ApolloClient({
  clientState: {
    defaults: {
      clientGreeting: 'Hello Apollo Link State!',
    },
  },
});

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('app'));
