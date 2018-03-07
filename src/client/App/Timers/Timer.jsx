import React, { Component } from 'react';
import format from 'date-fns/format';
import differenceInMilliseconds from 'date-fns/difference_in_milliseconds';
import differenceInHours from 'date-fns/difference_in_hours';

import { Title, Box, Button } from '../utils/sharedStyles';

class Timer extends Component {
  /* eslint-disable */
  state = {
    duration: 0,
    time: '00:00:00',
  };
  /* eslint-enable */

  componentWillUnmount() {}

  timer = null;

  startTimer = () => {
    if (this.timer) return;

    const start = new Date();

    this.timer = setInterval(() => {
      const now = new Date();
      const duration = differenceInMilliseconds(now, start);
      const hours = differenceInHours(now, start);
      const minutesSecondsMilliseconds = format(duration, 'mm:ss');
      // formatting for the rendered timer
      const time =
        hours < 10
          ? `0${hours}:${minutesSecondsMilliseconds}`
          : `${hours}:${minutesSecondsMilliseconds}`;
      this.setState(() => ({ duration }));
      this.setState(() => ({ time }));
    }, 100);
  };

  pause = () => {
    clearInterval(this.timer);
    this.timer = null;
  };

  reset = () => {
    clearInterval(this.timer);
    this.timer = null;
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
