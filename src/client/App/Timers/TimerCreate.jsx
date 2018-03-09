import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Form, Input, Label, Button } from '../utils/sharedStyles';

class TimerCreate extends Component {
  state = {
    timerName: '',
  };

  handleChange = (event) => {
    const timerName = event.target.value;
    this.setState(() => ({ timerName }));
  };

  render() {
    const TOGGLE_SHOW_TIMER = gql`
      mutation toggleShowTimer($showTimer: Bolean!, $name: String) {
        toggleShowTimer(showTimer: $showTimer, name: $name) @client
      }
    `;

    return (
      <Mutation mutation={TOGGLE_SHOW_TIMER}>
        {toggleShowTimer => (
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              toggleShowTimer({ variables: { showTimer: true, name: this.state.timerName } });
              this.setState(() => ({ timerName: '' }));
            }}
          >
            <Label>New Timer:</Label>
            <Input value={this.state.timerName} onChange={this.handleChange} />
            <Button>Create Timer</Button>
          </Form>
        )}
      </Mutation>
    );
  }
}
export default TimerCreate;
