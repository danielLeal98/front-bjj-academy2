import styled from 'styled-components';

export const ButtonCadastrar = styled.button`
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
  margin-left: 20px;
  &:hover {
    -ms-transform: scale(1.2); /* IE 9 */
    -webkit-transform: scale(1.2); /* Safari 3-8 */
    transform: scale(1.2);
  }
  padding: 12px;
`;
export const OpenModal = styled.button`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 500px;
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
  width: 400px;
  justify-content: center;
  padding: 12px;
  &:hover {
    opacity: 0.7;
  }
`;
export const ClearForm = styled.div`
  background-color: #d3d3d3;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  &:hover {
    -ms-transform: scale(1.2); /* IE 9 */
    -webkit-transform: scale(1.2); /* Safari 3-8 */
    transform: scale(1.2);
  }
  padding: 12px;
`;
export const ButtonBack = styled.image`
  padding: 16px 24px;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  transition: opacity 0.3s;
  margin: 10px;
  &:hover {
    opacity: 1;
    max-zoom: 0.3s;
  }
  @media (max-width: 800px) {
  }
`;

export const H1 = styled.h1`
  @media (max-width: 800px) {
    text-align: center;
  }
`;
export const DivButton = styled.div`
  display: -webkit-box;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;
export const Img = styled.img``;
export const IconsTrash = styled.img`
  height: 26px;
  width: 26px;
  margin-left: 10px;
`;

export const Label = styled.label`
  color: red;
  height: 57px;
  top: 0;
  left: 16px;
  display: flex;
  align-items: center;
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
`;

Label.Text = styled.span`
  color: red;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;
  display: flex;
  align-items: center;
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  transition: 0.1s ease-in-out;
`;
