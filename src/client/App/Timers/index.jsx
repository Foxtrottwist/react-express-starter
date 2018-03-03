import React from 'react';

import { Row } from '../utils/sharedStyles';
import TimerList from './TimerList';
import TimerCreate from './TimerCreate';

const Timers = () => (
  <Row>
    <TimerList />
    <TimerCreate />
  </Row>
);

export default Timers;
