import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { ContainerList } from '../../Pets/List/styles';
import ListTutors from '../../../components/ListTutor';
import tutorsRepository from '../../../repositories/tutors';

function ListTutor(props) {
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    tutorsRepository
      .getAllTutors()
      .then((allTutors) => {
        setTutors(allTutors);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <ContainerList>
        <ListTutors data={tutors} />
      </ContainerList>
    </PageDefault>
  );
}

export default ListTutor;
