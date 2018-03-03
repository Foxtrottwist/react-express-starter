import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0 0.5rem 1rem 0.5rem;
  color: #0079bf;
  border-left: 0.3rem solid #00a5e3;

  li {
    padding: 0 0 0.5rem 0;
  }
`;

const TODOS_QUERY = gql`
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

      return <List>{data.todos.map(renderTodosQuery)}</List>;
    }}
  </Query>
);

export default TodoList;
