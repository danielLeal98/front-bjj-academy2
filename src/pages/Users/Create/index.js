import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { toast } from 'react-toastify';
import {
  ButtonCadastrar,
  DivButton,
  ClearForm,
} from '../../Pets/Create/styles';
import { useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import usersRepository from '../../../repositories/users';
import md5 from 'md5';

function CreateUser(props) {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const history = useHistory();
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [users, setUser] = useState([]);
  return (
    <PageDefault>
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
      >
        <form
          onSubmit={function handleSubmit(info) {
            info.preventDefault();
            setUser([...users, values]);
            clearForm();

            let errors = [];
            const chaves = Object.keys(values);

            errors = chaves.filter((chave) => {
              return !values[chave];
            });

            if (errors.length > 0) {
              errors.forEach((error) => {
                toast.error(`O Campo ${error} precisa ser preenchido`);
              });
              return;
            }

            usersRepository
              .createUser({
                name: values.name,
                email: values.email,
                password: md5(values.password),
              })
              .then((response) => {
                console.log(response);
                if (response === true) {
                  history.push('/listUser');
                } else {
                  toast.error(response.message);
                  clearForm();
                }
              });
          }}
        >
          <h1>
            Cadastro de Usuáros <i className="fa fa-fw fa-user"></i>
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
            label="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <DivButton>
            <ClearForm onClick={clearForm}>
              <span>
                <i className="far fa-window-close"></i> Limpar
              </span>
            </ClearForm>
            <ButtonCadastrar>
              <i className="far fa-check-square"></i> Salvar
            </ButtonCadastrar>
          </DivButton>
        </form>
      </div>
    </PageDefault>
  );
}

export default CreateUser;
