import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Form, Input, Label, Button } from '../utils/sharedStyles';
import Timer from './Timer';

class TimerCreate extends Component {
  state = {
    timerTitle: '',
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

  render() {
    const SHOW_TIMER = gql`
      query {
        showTimer @client
      }
    `;
    return (
      <Query query={SHOW_TIMER}>
        {({ loading, error, data }) => {
          if (loading) return <span>Loading...</span>;
          if (error) return <span color="red">Error: Connection Error</span>;

          if (!data.showTimer) {
            return (
              <Form onSubmit={this.handleSubmit}>
                <Label>New Timer:</Label>
                <Input value={this.state.timerTitle} onChange={this.handleChange} />
                <Button>Create Timer</Button>
              </Form>
            );
          }
          return <Timer {...this.state.timer} />;
        }}
      </Query>
    );
  }
}
export default TimerCreate;
