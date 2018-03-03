import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { ListBox, List, Title } from '../utils/sharedStyles';

const TIMERS_QUERY = gql`
  query {
    timers {
      id
      title
      finish
      duration
    }
  }
`;

const TimerList = () => (
  <Query query={TIMERS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <span>Loading...</span>;
      if (error) return <span color="red">Error: Connection Error</span>;

      function renderTimersQuery(timer) {
        return <li key={timer.id}>{timer.title}</li>;
      }

      return (
        <ListBox>
          <Title>Timers</Title>
          <List>{data.timers.map(renderTimersQuery)}</List>
        </ListBox>
      );
    }}
  </Query>
);

export default TimerList;
