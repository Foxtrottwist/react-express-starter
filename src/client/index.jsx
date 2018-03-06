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
      showTimer: false,
    },
    Mutation: {
      toggleShowTimer: (_, { showTimer }, { cache }) => {
        cache.writeData({ data: { showTimer } });
        return null;
      },
    },
  },
});

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('app'));
