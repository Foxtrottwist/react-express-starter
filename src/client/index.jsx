import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import format from 'date-fns/format';
import { injectGlobal } from 'styled-components';

import App from './App';

// eslint-disable-next-line
injectGlobal`
    * { margin: 0; padding: 0; }
`;

const client = new ApolloClient({
  clientState: {
    defaults: {
      currentTime: format(new Date(), 'HH:mm:ss'),
    },
  },
});

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('app'));