import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 8rem;
  width: 12rem;
  padding: 1%;
`;

const Input = styled.input`
  display: block;
  height: 1.5rem;
  width: 10rem;
  border: 0.001rem solid #000;
  margin-bottom: 2.5rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
`;

const Label = styled.label`
  font-size: 1rem;
`;

const Button = styled.button`
  height: 1.5rem;
  width: 5rem;
  background-color: #fff;
  border: 0.08rem solid ${props => props.color};
  border-radius: 3%;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 300;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

class TodoAdd extends Component {
  state = {
    todoTitle: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(() => ({ todoTitle: '' }));
  };

  handleChange = (event) => {
    const todoTitle = event.target.value;
    this.setState(() => ({ todoTitle }));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>Todo Title:</Label>
        <Input type="text" value={this.state.todoTitle} onChange={this.handleChange} />
        <Button type="submit">Add Todo</Button>
      </Form>
    );
  }
}

export default TodoAdd;
