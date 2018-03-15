import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0079bf;
  height: 20vh;
  margin-top: 1rem;
  border-top: 0.3rem solid #00a5e3;
  box-shadow: 3px 3px 5px 0px #ccc;
`;

const Heading = styled.h1`
  text-align: center;
  color: ${({ color = 'paleturquoise' }) => color};
`;

const Error = styled.span`
  color: red;
`;

const HELLO_QUERY = gql`
  query {
    greeting {
      greeting
    }
  }
`;

const CLIENT_QUERY = gql`
  query {
    clientGreeting @client
  }
`;

const App = () => (
  <Header>
    <Heading>Hello React</Heading>
    <Query query={HELLO_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Heading>Loading...</Heading>;
        if (error) return <Error>Error: No GraphQL here :(</Error>;

        return <Heading>{data.greeting.greeting}</Heading>;
      }}
    </Query>

    <Query query={CLIENT_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Heading>Loading...</Heading>;
        if (error) return <Error>Error: No Apollo State here :(</Error>;

        return <Heading>{data.clientGreeting}</Heading>;
      }}
    </Query>
  </Header>
);

export default App;
