import React, { Component } from 'react';
import format from 'date-fns/format';

import { Title, Box, Button } from '../utils/sharedStyles';
import formatTime from '../utils/formatTime';

class Timer extends Component {
  state = {
    timer: null,
    offset: null,
    duration: 0,
    time: '00:00:00',
    start: '',
  };

  componentWillUnmount() {
    this.reset();
  }

  startTimer = () => {
    if (this.state.timer) return;

    this.setState(() => ({ offset: Date.now() }));

    const timer = setInterval(() => {
      const now = Date.now();
      const { offset } = this.state;

      // calculate the total duration on the timer, make it look pretty with formatTime()
      const duration = this.state.duration + (now - offset);
      const time = formatTime(duration);

      // updating state with duration and offset to allow for pausing
      this.setState(() => ({ duration, time, offset: now }));
    }, 300);

    // if the start time has already been documented, don't overwrite it
    if (!this.state.start) {
      this.setState(() => ({ timer, start: format(new Date(), 'dddd MMMM DD, HH:mm') }));
    }
    this.setState(() => ({ timer }));
  };

  pause = () => {
    clearInterval(this.state.timer);
    this.setState(() => ({ timer: null }));
  };

  reset = () => {
    clearInterval(this.state.timer);
    this.setState(() => ({
      timer: null,
      offset: null,
      duration: 0,
      time: '00:00:00',
      start: '',
    }));
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
