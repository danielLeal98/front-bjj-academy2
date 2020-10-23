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
  background-color: var(--black);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: 0;
  justify-content: center;
  align-items: center;
`;
export const Section = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: var(--primary);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1.1rem;
  outline: 0;
  max-width: 550px;
  min-width: 550px;
  text-align: center;
`;

export const Logo = styled.img`
  height: 160px;
  width: 160px;
  display: flex;
  align-self: center;
`;
export const ButtonLogin = styled.button`
  width: auto;
  box-sizing: border-box;
  background-color: var(--black);
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
export const FormLogin = styled.form``;
