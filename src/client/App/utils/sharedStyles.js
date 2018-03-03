import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
`;

export const Button = styled.button`
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
