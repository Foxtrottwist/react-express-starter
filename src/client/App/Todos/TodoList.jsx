import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { ListBox, List, Title } from '../utils/sharedStyles';

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
      if (error) return <span color="red">Error: Connection Error</span>;

      function renderTodosQuery(todo) {
        return <li key={todo.id}>{todo.title}</li>;
      }

      return (
        <ListBox>
          <Title>Todos</Title>
          <List>{data.todos.map(renderTodosQuery)}</List>
        </ListBox>
      );
    }}
  </Query>
);

export default TodoList;
