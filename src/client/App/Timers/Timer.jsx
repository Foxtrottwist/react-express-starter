import React, { Component } from 'react';
import format from 'date-fns/format';
import differenceInMilliseconds from 'date-fns/difference_in_milliseconds';
import differenceInHours from 'date-fns/difference_in_hours';

import { Title, Box, Button } from '../utils/sharedStyles';

class Timer extends Component {
  state = {
    timer: null,
    time: '00:00:00',
    start: '',
  };

  componentWillUnmount() {
    this.reset();
  }

  startTimer = () => {
    if (this.state.timer) return;

    const start = new Date();

    const timer = setInterval(() => {
      const now = new Date();

      const duration = differenceInMilliseconds(now, start);
      const hours = differenceInHours(now, start);
      const minutesSeconds = format(duration, 'mm:ss');
      const time = hours < 10 ? `0${hours}:${minutesSeconds}` : `${hours}:${minutesSeconds}`;

      this.setState(() => ({ time }));
    }, 100);

    this.setState(() => ({ timer, start: format(new Date(), 'dddd MMMM DD, HH:mm') }));
  };

  reset = () => {
    clearInterval(this.state.timer);
    this.setState(() => ({ timer: null, time: '00:00:00' }));
  };

  render() {
    return (
      <Box>
        <Title>{this.props.name}</Title>
        <Title>{this.state.time}</Title>
        <Button onClick={this.startTimer}>Start</Button>
        <Button onClick={this.reset}>Reset</Button>
      </Box>
    );
  }
}

export default Timer;
