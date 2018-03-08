import React, { Component } from 'react';
import format from 'date-fns/format';
import differenceInMilliseconds from 'date-fns/difference_in_milliseconds';
import differenceInHours from 'date-fns/difference_in_hours';

import { Title, Box, Button } from '../utils/sharedStyles';

class Timer extends Component {
  /* eslint-disable */
  state = {
    timer: null,
    duration: 0,
    time: '00:00:00',
  };
  /* eslint-enable */

  componentWillUnmount() {
    this.pause();
  }

  startTimer = () => {
    if (this.state.timer) return;

    const start = new Date();

    const timer = setInterval(() => {
      const now = new Date();
      const duration = differenceInMilliseconds(now, start);
      const hours = differenceInHours(now, start);
      const minutesSeconds = format(duration, 'mm:ss');
      // formatting for the rendered timer
      const time = hours < 10 ? `0${hours}:${minutesSeconds}` : `${hours}:${minutesSeconds}`;
      this.setState(() => ({ duration }));
      this.setState(() => ({ time }));
    }, 100);

    this.setState(() => ({ timer }));
  };

  pause = () => {
    clearInterval(this.state.timer);
    this.setState(() => ({ timer: null }));
  };

  reset = () => {
    clearInterval(this.state.timer);
    this.setState(() => ({ timer: null }));
    this.setState(() => ({ time: '00:00:00', duration: 0 }));
  };

  render() {
    return (
      <Box>
        <Title>{this.props.name}</Title>
        <Title>{this.state.time}</Title>
        <Button onClick={this.startTimer}>Start</Button>
        <Button onClick={this.pause}>Pause</Button>
        <Button onClick={this.reset}>Reset</Button>
      </Box>
    );
  }
}

export default Timer;
