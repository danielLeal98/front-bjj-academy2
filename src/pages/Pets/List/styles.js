import styled from 'styled-components';

export const H1 = styled.h1`
  @media (max-width: 800px) {
    text-align: center;
  }
  color: rgb(83, 88, 93);
`;
export const ContainerList = styled.div`
  @media (max-width: 768px) {
    padding-bottom: 15%;
    padding-top: 3%;
    width: 100%;
    height: 100%;
  }
`;
export const TextField = styled.input`
  height: 43px;
  width: 250px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
  background-color: var(--greyLight);
  &:hover {
    cursor: pointer;
  }
`;
export const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-color: white;
  height: 44px;
  width: 42px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary);
`;
export const DivButtonSearch = styled.div`
  float: right;
  display: flex;
  padding-top: 5%;
  padding-bottom: 1%;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 10%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding-top: 15%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 20%;
  }
`;
