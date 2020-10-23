import styled from 'styled-components';

export const DivHome = styled.div`
  display: grid;
  padding-top: 3%;

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
