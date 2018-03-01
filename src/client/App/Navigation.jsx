import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  width: 15rem;
  padding: 0 1% 0 1%;
  margin-top: 0.5rem;
  background-color: #0079bf;
  border-right: 0.3rem solid #00a5e3;
  box-shadow: 3px 3px 5px 0px #ccc;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    color: paleturquoise;
  }
`;

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navigation = () => (
  <NavBar>
    <Link to="/">Dashboard</Link>
    <Link to="/timers">Timers</Link>
    <Link to="/todos">Todos</Link>
  </NavBar>
);

export default Navigation;
