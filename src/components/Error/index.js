import React from 'react';
import './error.css';
import img404 from '../../assets/error404.png';
import { Container, Imagem } from './styles';

function Error404() {
  return (
    <Container>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Imagem src={img404}></Imagem>
      </div>
    </Container>
  );
}

export default Error404;
