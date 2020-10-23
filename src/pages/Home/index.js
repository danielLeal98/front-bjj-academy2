import React from 'react';
import PageDefault from '../../components/PageDefault';
import { DivHome } from '../Home/styles';

function Home() {
  return (
    <PageDefault>
      <DivHome>
        <h1 style={{ color: 'grey', margin: '10px' }}>
          <span style={{ color: 'grey' }}>BJJ - Academy Alliance</span>
        </h1>
        <h3 style={{ color: 'black', margin: '10px' }}>R. FAGUNDES VARELA, 227 Cerâmica 26031-300 Nova Iguaçu, RJ</h3>
      </DivHome>
    </PageDefault>
  );
}

export default Home;
