import React, { Component } from 'react';
import styled from 'styled-components';

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

const Button = styled.button`
  height: 1.5rem;
  width: 5rem;
  background-color: #fff;
  border: 0.1rem solid #0079bf;
  border-right: 0.3rem solid #00a5e3;
  border-radius: 3%;
  cursor: pointer;
  color: #0079bf;
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
        <Label>New Todo:</Label>
        <Input type="text" value={this.state.todoTitle} onChange={this.handleChange} />
        <Button type="submit">Add Todo</Button>
      </Form>
    );
  }
}

export default TodoAdd;
