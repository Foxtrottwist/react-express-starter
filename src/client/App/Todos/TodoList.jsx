import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Box, List, Title, Error } from '../utils/sharedStyles';

export const TODOS_QUERY = gql`
  query {
    todos {
      id
      title
    }
  }
`;

const TodoList = () => (
  <Query query={TODOS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <span>Loading...</span>;
      if (error) return <Error>Error: Connection Error</Error>;

      function renderTodosQuery(todo) {
        return <li key={todo.id}>{todo.title}</li>;
      }

      return (
        <Box>
          <Title>Todos</Title>
          <List>{data.todos.map(renderTodosQuery)}</List>
        </Box>
      );
    }}
  </Query>
);

export default TodoList;
