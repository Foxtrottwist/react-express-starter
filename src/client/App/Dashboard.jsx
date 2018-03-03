import React from 'react';

import { Row } from './utils/sharedStyles';
import TimerList from './Timers/TimerList';
import TodoList from './Todos/TodoList';

const Dashboard = () => (
  <Row>
    <TimerList />
    <TodoList />
  </Row>
);

export default Dashboard;
