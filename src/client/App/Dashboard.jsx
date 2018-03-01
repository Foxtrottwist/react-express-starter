import React from 'react';

import TimerList from './Timers/TimerList';
import TodoList from './Todos/TodoList';

const Dashboard = () => (
  <div>
    <TimerList />
    <TodoList />
  </div>
);

export default Dashboard;
