import React, { Component } from 'react';

import { Title, Box } from '../utils/sharedStyles';

class Timer extends Component {
  state = {
    start: '',
    duration: 0,
    time: '',
  };

  render() {
    return (
      <Box>
        <Title>{this.props.name}</Title>
      </Box>
    );
  }
}

export default Timer;
