import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { ContainerList } from './styles';
import ListPets from '../../../components/ListPet';
import petsRepository from '../../../repositories/pets';

function ListPet(props) {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    petsRepository
      .getAllPets()
      .then((allPets) => {
        setPets(allPets);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <ContainerList>
        <ListPets data={pets} />
      </ContainerList>
    </PageDefault>
  );
}

export default ListPet;
