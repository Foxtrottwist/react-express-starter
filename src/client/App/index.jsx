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
  color: paleturquoise;
`;

const HELLO_QUERY = gql`
  query {
    greeting
  }
`;

const TIME_QUERY = gql`
  query {
    currentTime @client
  }
`;

const App = () => (
  <Header>
    <Heading>Hello React</Heading>
    <Query query={HELLO_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: No GraphQL here :(</div>;

        return <Heading>{data.greeting}</Heading>;
      }}
    </Query>

    <Query query={TIME_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: No GraphQL here :(</div>;

        return <Heading>{data.currentTime}</Heading>;
      }}
    </Query>
  </Header>
);

export default App;
