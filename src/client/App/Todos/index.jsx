import React from 'react';
import styled from 'styled-components';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const Row = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
`;

const Todos = () => (
  <Row>
    <TodoList />
    <TodoAdd />
  </Row>
);

export default Todos;
