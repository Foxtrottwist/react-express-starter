import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Row, Error } from '../utils/sharedStyles';
import TimerList from './TimerList';
import TimerCreate from './TimerCreate';
import Timer from './Timer';

const SHOW_TIMER = gql`
  query {
    showTimer @client
    name @client
  }
`;

const Timers = () => (
  <Row>
    <TimerList />
    <TimerCreate />

    <Query query={SHOW_TIMER}>
      {({ loading, error, data }) => {
        if (loading) return <span>Loading...</span>;
        if (error) return <Error>Error: Connection Error</Error>;

        return data.showTimer ? <Timer name={data.name} /> : null;
      }}
    </Query>
  </Row>
);

export default Timers;
