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

export const ListBox = styled.div`
  display: inline-block;
  padding: 0 1rem 1rem 1rem;
  border-left: 0.3rem solid #00a5e3;
`;

export const List = styled.ul`
  list-style: none;
  color: #0079bf;

  li {
    margin: 0 0 0.5rem 0;
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 1rem;
  color: paleturquoise;
  margin-bottom: 0.3rem;
  padding: 2% 0 2% 3%;
  background-color: #0079bf;
  border-right: 0.3rem solid #00a5e3;
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

export const Label = styled.label`
  font-size: 1rem;
  color: paleturquoise;
  padding: 2% 0 2% 3%;
  background-color: #0079bf;
  border-right: 0.3rem solid #00a5e3;
`;
