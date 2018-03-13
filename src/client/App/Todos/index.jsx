import React from 'react';

import { Row } from '../utils/sharedStyles';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const Todos = () => (
  <Row>
    <TodoList />
    <TodoAdd />
  </Row>
);

export default Todos;
