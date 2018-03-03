import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

const ListBox = styled.div`
  display: inline-block;
  padding: 0 1rem 1rem 1rem;
  border-left: 0.3rem solid #00a5e3;
`;

const List = styled.ul`
  list-style: none;
  /* padding: 0 0.5rem 1rem 0.5rem; */
  color: #0079bf;
  /* border-left: 0.3rem solid #00a5e3; */

  li {
    padding: 0 0 0.5rem 0;
  }
`;

const Title = styled.span`
  display: block;
  font-size: 1rem;
  color: paleturquoise;
  margin-bottom: 0.3rem;
  padding: 2% 0 2% 3%;
  background-color: #0079bf;
  border-right: 0.3rem solid #00a5e3;
`;

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
