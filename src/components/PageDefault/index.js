import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import GlobalStyled from '../../GlobalStyled';

const Container = styled.div`
  width: 100vw;
`;
const Content = styled.div`
  padding: 10px;
  display: block;
`;

function PageDefault({ children }) {
  return (
    <>
      <Container>
        <Header />
        <div>
          <Content>{children}</Content>
        </div>
        <GlobalStyled />
        <ToastContainer autoClose={2000} className="toast-container" />
        <div>
          <Footer />
        </div>
      </Container>
    </>
  );
}
export default PageDefault;
