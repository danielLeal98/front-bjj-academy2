import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { ContainerList } from '../../Pets/List/styles';
import ListUsers from '../../../components/ListUsers';
import usersRepository from '../../../repositories/users';

function ListUser(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    usersRepository
      .getAllUsers()
      .then((allUsers) => {
        setUsers(allUsers);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <ContainerList>
        <ListUsers data={users} />
      </ContainerList>
    </PageDefault>
  );
}

export default ListUser;
