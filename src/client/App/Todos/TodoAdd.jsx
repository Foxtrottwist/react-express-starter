import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

import { Button } from '../utils/sharedStyles';
import { TODOS_QUERY } from './TodoList';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 8rem;
  width: 12rem;
  padding: 1%;
  border-left: 0.3rem solid #00a5e3;
`;

const Input = styled.input`
  display: block;
  height: 1.5rem;
  width: 11rem;
  border: 0.001rem solid #000;
  margin-bottom: 2.5rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  border: 0.1rem solid #0079bf;
  border-right: 0.3rem solid #00a5e3;
`;

const Label = styled.label`
  font-size: 1rem;
  color: paleturquoise;
  padding: 2% 0 2% 3%;
  background-color: #0079bf;
  border-right: 0.3rem solid #00a5e3;
`;

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
