import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import md5 from 'md5';
import PageDefault from '../../../components/PageDefault';
import {
  ButtonCadastrar,
  DivButton,
  ClearForm,
} from '../../Pets/Create/styles';

import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import usersRepository from '../../../repositories/users';

function EditUser() {
  const history = useHistory();
  const query = useQuery();
  const initialPassword = { new_password: '' };
  const [newPassword, setNewPassword] = useState(initialPassword);

  function handlePassword(parms) {
    setNewPassword({
      ...newPassword,
      ['new_password']: parms.target.value,
    });
  }

  function useQuery() {
    return new URLSearchParams(useLocation().state);
  }

  const currentPassword = query.get('password');

  const initialValues = {
    id: query.get('id'),
    name: query.get('name'),
    email: query.get('email'),
    password: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);
  return (
    <PageDefault>
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
      >
        <form
          onSubmit={function handleSubmit(info) {
            info.preventDefault();
            if (values.name === '' || values.email === '') {
              toast.error(`O Campo Nome e Email precisam ser preenchidos`);
              return false;
            } else if (values.password !== '') {
              if (md5(values.password) !== currentPassword) {
                toast.error(`Senha atual inválida`);
                return false;
              } else if (newPassword.new_password === '') {
                toast.error(`O Campo Nova senha precisa ser preenchido`);
                return false;
              } else {
                values.password = md5(newPassword.new_password);
              }
            } else {
              values.password = currentPassword;
            }

            usersRepository
              .updateUser(initialValues.id, values)
              .then((response) => {
                if (response === true) {
                  toast.success('Usuário editado com sucesso');
                  history.push('/listUser');
                } else {
                  toast.error('Não foi possível cadastrar o usuário');
                  console.log(response);
                }
              })
              .catch(() => toast.error('Não foi possível cadastrar o usuário'));
          }}
        >
          <h1>
            Editar Usuário <i className="fa fa-fw fa-user"></i>
          </h1>
          <FormField
            label="Nome"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <FormField
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <FormField
            label="Senha Atual"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <FormField
            label="Nova Senha"
            type="password"
            name="newPassword"
            value={newPassword.new_password}
            onChange={handlePassword}
          />
          <DivButton>
            <ClearForm onClick={clearForm}>
              <span>
                <i className="far fa-window-close"></i> Limpar
              </span>
            </ClearForm>
            <ButtonCadastrar>
              <i className="far fa-check-square"></i> Atualizar
            </ButtonCadastrar>
          </DivButton>
        </form>
      </div>
    </PageDefault>
  );
}

export default EditUser;
