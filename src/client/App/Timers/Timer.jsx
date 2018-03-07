import React, { Component } from 'react';
import format from 'date-fns/format';
import differenceInMilliseconds from 'date-fns/difference_in_milliseconds';
import differenceInHours from 'date-fns/difference_in_hours';

import { Title, Box } from '../utils/sharedStyles';

class Timer extends Component {
  /* eslint-disable */
  state = {
    duration: 0,
    time: '',
  };
  /* eslint-enable */

  componentDidMount() {
    this.timer();
  }

  timer = () => {
    const start = new Date();

    setInterval(() => {
      const now = new Date();
      const duration = differenceInMilliseconds(now, start);
      const hours = differenceInHours(now, start);
      const minutesSecondsMilliseconds = format(duration, 'mm:ss');
      const time =
        hours < 10
          ? `0${hours}:${minutesSecondsMilliseconds}`
          : `${hours}:${minutesSecondsMilliseconds}`;
      this.setState(() => ({ duration }));
      this.setState(() => ({ time }));
    }, 100);
  };

  render() {
    return (
      <Box>
        <Title>{this.props.name}</Title>
        <Title>{this.state.time}</Title>
      </Box>
    );
  }
}

export default Timer;
