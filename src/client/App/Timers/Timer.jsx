import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import format from 'date-fns/format';

import { Title, Box, Button, Error } from '../utils/sharedStyles';
import formatTime from '../utils/formatTime';
import { TIMERS_QUERY } from './TimerList';

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 8rem;
`;

class Timer extends Component {
  state = {
    timer: null,
    offset: null,
    duration: 0,
    time: '00:00:00',
    start: '',
    finish: '',
    error: null,
  };

  componentWillUnmount() {
    this.reset();
  }

  startTimer = () => {
    if (this.state.timer) return;

    this.setState(() => ({ offset: Date.now(), finish: '' }));

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

  stop = () => {
    clearInterval(this.state.timer);
    this.setState(() => ({
      timer: null,
      finish: format(new Date(), 'dddd MMMM DD, HH:mm'),
      error: null,
    }));
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

  renderSaveButton = () => {
    const CREATE_TIMER_MUTATION = gql`
      mutation createTimer($title: String!, $start: String!, $finish: String!, $duration: String!) {
        createTimer(title: $title, start: $start, finish: $finish, duration: $duration) {
          id
          title
          start
          finish
          duration
        }
        toggleShowTimer(showTimer: $showTimer, name: $name) @client
      }
    `;

    const title = this.props.name;
    const { start, finish, duration } = this.state;

    return (
      <Mutation mutation={CREATE_TIMER_MUTATION}>
        {createTimer => (
          <Button
            onClick={() => {
              if (this.state.timer) {
                this.setState(() => ({ error: 'Stop the timer before saving' }));
                return;
              }
              createTimer({
                variables: {
                  title,
                  start,
                  finish,
                  duration,
                  showTimer: true,
                  name: '',
                },
                refetchQueries: [{ query: TIMERS_QUERY }],
              });
              this.reset();
            }}
          >
            Save
          </Button>
        )}
      </Mutation>
    );
  };

  render() {
    return (
      <Box>
        <Title>{this.props.name}</Title>
        <Title>{this.state.time}</Title>
        <BtnBox>
          <Button onClick={this.startTimer}>Start</Button>
          <Button onClick={this.stop}>Stop</Button>
          <Button onClick={this.reset}>Reset</Button>
          {this.renderSaveButton()}
        </BtnBox>
        {this.state.error ? <Error>{this.state.error}</Error> : null}
      </Box>
    );
  }
}

export default Timer;
