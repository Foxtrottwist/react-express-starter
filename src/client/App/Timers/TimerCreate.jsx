import React, { Component } from 'react';

import { Form, Input, Label, Button } from '../utils/sharedStyles';
import Timer from './Timer';

class TimerCreate extends Component {
  state = {
    timerTitle: '',
    showTimer: false,
    timer: {
      title: '',
      start: '',
      duration: 0,
      time: '',
    },
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(() => ({
      showTimer: true,
      timer: { title: this.state.timerTitle },
    }));
  };

  handleChange = (event) => {
    const timerTitle = event.target.value;
    this.setState(() => ({ timerTitle }));
  };

  renderTimerControls = () => {
    if (!this.state.showTimer) {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Label>New Timer:</Label>
          <Input value={this.state.timerTitle} onChange={this.handleChange} />
          <Button>Create Timer</Button>
        </Form>
      );
    }
    return <Timer {...this.state.timer} />;
  };

  render() {
    return this.renderTimerControls();
  }
}
export default TimerCreate;
