import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
  pointer-events: auto;
  background-clip: padding-box;
  outline: 0;
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
`;

export const Imagem = styled.img`
  min-height: 100%;
  min-width: 100%;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
`;
export const Section = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: red;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1.1rem;
  outline: 0;
  max-width: 50vw;
  min-width: auto;
  text-align: center;
`;
