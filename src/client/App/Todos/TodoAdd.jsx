import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Form, Input, Label, Button } from '../utils/sharedStyles';
import { TODOS_QUERY } from './TodoList';

class TodoAdd extends Component {
  state = {
    todoTitle: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.mutate({
      variables: { title: this.state.todoTitle },
      refetchQueries: [{ query: TODOS_QUERY }],
    });
    this.setState(() => ({ todoTitle: '' }));
  };

  handleChange = (event) => {
    const todoTitle = event.target.value;
    this.setState(() => ({ todoTitle }));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>New Todo:</Label>
        <Input type="text" value={this.state.todoTitle} onChange={this.handleChange} />
        <Button type="submit">Add Todo</Button>
      </Form>
    );
  }
}

const ADD_TODO = gql`
  mutation addTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
      completed
    }
  }
`;

export default graphql(ADD_TODO)(TodoAdd);
