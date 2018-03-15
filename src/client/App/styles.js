import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
`;

export const Button = styled.button`
  height: 1.5rem;
  width: 8rem;
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

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0079bf;
  height: 20vh;
  margin-top: 1rem;
  border-top: 0.3rem solid #00a5e3;
  box-shadow: 3px 3px 5px 0px #ccc;
`;

export const Heading = styled.h1`
  text-align: center;
  color: ${({ color = 'paleturquoise' }) => color};
`;

export const Error = styled.span`
  color: red;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 8rem;
  width: 12rem;
  padding: 1%;
  border-left: 0.3rem solid #00a5e3;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: paleturquoise;
  padding: 2% 0 2% 3%;
  background-color: #0079bf;
  border-right: 0.3rem solid #00a5e3;
`;

export const Input = styled.input`
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
