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
import tutorsRepository from '../../../repositories/tutors';

function CreateTutor() {
  const initialValues = {
    nome: '',
    cpf: '',
    phone: '',
    address: '',
  };

  const history = useHistory();
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [tutors, setTutor] = useState([]);

  return (
    <PageDefault>
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
      >
        <form
          onSubmit={function handleSubmit(info) {
            info.preventDefault();
            setTutor([...tutors, values]);
            clearForm();

            if (values.nome === '') {
              toast.error(`O Campo Nome precisa ser preenchido`);
              return false;
            } else if (values.phone === '') {
              toast.error(`O Campo Cpf precisa ser preenchido`);
              return false;
            } else if (values.address === '') {
              toast.error(`O Campo Tutor precisa ser preenchido`);
              return false;
            }

            tutorsRepository
              .createTutor({
                name: values.nome,
                cpf: values.cpf,
                phone: values.phone,
                address: values.address,
              })
              .then((response) => {
                if (response === true) {
                  history.push('/listTutor');
                } else {
                  toast.error(
                    'Não foi possivel cadastrar o Pet, tente novamente'
                  );
                  console.log(response);
                  clearForm();
                }
              });
          }}
        >
          <h1>
            Cadastro de Tutors <i className="fa fa-fw fa-user"></i>
          </h1>
          <FormField
            label="Nome"
            type="text"
            name="nome"
            value={values.nome}
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
              <i className="far fa-check-square"></i> Salvar
            </ButtonCadastrar>
          </DivButton>
        </form>
      </div>
    </PageDefault>
  );
}

export default CreateTutor;
