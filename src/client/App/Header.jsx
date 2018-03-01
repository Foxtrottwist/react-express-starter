import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import format from 'date-fns/format';

const HeaderBox = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0079bf;
  height: 20vh;
  margin-top: 0.5rem;
  border-top: 0.3rem solid #00a5e3;
  box-shadow: 3px 3px 5px 0px #ccc;
`;

const Heading = styled.h1`
  text-align: center;
  color: ${({ color = 'paleturquoise' }) => color};
`;

const HELLO_QUERY = gql`
  query {
    greeting
  }
`;

class Header extends Component {
  state = {
    currentTime: format(new Date(), 'HH:mm:ss'),
  };

  componentDidMount() {
    setInterval(() => this.updateCurrentTime(), 1000);
  }

  updateCurrentTime = () => {
    const currentTime = format(new Date(), 'HH:mm:ss');
    this.setState(() => ({ currentTime }));
  };

  renderHelloQuery = () => (
    <Query query={HELLO_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Heading>Loading...</Heading>;
        if (error) return <Heading color="red">Error: No GraphQL here :(</Heading>;

        return <Heading>{data.greeting}</Heading>;
      }}
    </Query>
  );

  render() {
    return (
      <HeaderBox>
        <Heading>Hello React</Heading>
        {this.renderHelloQuery()}
        <Heading>{this.state.currentTime}</Heading>
      </HeaderBox>
    );
  }
}

export default Header;