import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { toast } from 'react-toastify';
import {
  ButtonCadastrar,
  DivButton,
  ClearForm,
} from '../../Pets/Create/styles';
import { useLocation, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import tutorsRepository from '../../../repositories/tutors';

function EditTutor() {
  const history = useHistory();
  const query = useQuery();

  function useQuery() {
    return new URLSearchParams(useLocation().state);
  }

  const initialValues = {
    name: query.get('name'),
    cpf: query.get('cpf'),
    phone: query.get('phone'),
    address: query.get('address'),
    id: query.get('id'),
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

            tutorsRepository
              .updateTutor(initialValues.id, values)
              .then((response) => {
                if (response === true) {
                  toast.success('Tutor editada com sucesso');
                  history.push('/listTutor');
                } else {
                  toast.error('Não foi possível cadastrar a categoria');
                  console.log(response);
                }
              })
              .catch(() =>
                toast.error('Não foi possível cadastrar a categoria')
              );
          }}
        >
          <h1>
            Editar Tutor <i className="fa fa-fw fa-user"></i>
          </h1>
          <FormField
            label="Nome"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <FormField
            label="Cpf"
            type="text"
            name="cpf"
            value={values.cpf}
            onChange={handleChange}
          />
          <FormField
            label="Telefone"
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />

          <FormField
            label="Endereço"
            type="textarea"
            name="address"
            value={values.address}
            onChange={handleChange}
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

export default EditTutor;
