import styled from 'styled-components';

export const ButtonClose = styled.button`
  width: auto;
  box-sizing: border-box;
  background-color: grey;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  transition: opacity 0.3s;
  margin-top: 10px;

  &:hover {
    opacity: 0.7;
  }
  padding: 20px;
`;
