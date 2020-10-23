import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { toast } from 'react-toastify';
import {
  ButtonCadastrar,
  DivButton,
  ClearForm,
  OpenModal,
} from '../../Pets/Create/styles';
import { useLocation, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import petsRepository from '../../../repositories/pets';
import ModalTutor from '../../../components/ModalTutor';

function EditPet() {
  const history = useHistory();
  const query = useQuery();

  function useQuery() {
    return new URLSearchParams(useLocation().state);
  }

  const initialValues = {
    name: query.get('name'),
    breed: query.get('breed'),
    date_nasc: query.get('date_nasc'),
    vaccine: query.get('vaccine'),
    obs: query.get('obs'),
    tutorName: query.get('tutorName'),
    tutorId: Number(query.get('tutorId')),
    id: Number(query.get('id')),
  };

  const { handleChange, values, clearForm } = useForm(initialValues);
  const [modalShow, setModalShow] = useState(false);
  const [labelSelected, setLabelSelected] = useState({
    value: initialValues.tutorId,
    label: initialValues.tutorName,
  });

  return (
    <PageDefault>
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
      >
        <form
          onSubmit={function handleSubmit(info) {
            info.preventDefault();
            if (values.name === '') {
              toast.error(`O Campo Nome precisa ser preenchido`);
              return false;
            } else if (values.breed === '') {
              toast.error(`O Campo Raça precisa ser preenchido`);
              return false;
            } else if (labelSelected.value === '') {
              toast.error(`O Campo Tutor precisa ser preenchido`);
              return false;
            }

            values.tutorId = labelSelected.value;
            values.tutorName = labelSelected.label;

            petsRepository
              .updatePet(initialValues.id, values)
              .then((response) => {
                if (response === true) {
                  toast.success('Pet editado com sucesso');
                  history.push('/listPet');
                } else {
                  toast.error('Não foi possível cadastrar o pet');
                  console.log(response);
                }
              })
              .catch(() => toast.error('Não foi possível atualizar o pet'));
          }}
        >
          <h1>
            Editar Pet <i className="fa fa-fw fa-user"></i>
          </h1>
          <FormField
            label="Nome"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <FormField
            label="Data de Nascimento"
            type="date"
            name="date_nasc"
            value={values.date_nasc}
            onChange={handleChange}
          />
          <FormField
            label="Raça"
            type="text"
            name="breed"
            value={values.breed}
            onChange={handleChange}
          />
          <FormField
            label="Vacina"
            type="text"
            name="vaccine"
            value={values.vaccine}
            onChange={handleChange}
          />
          <FormField
            label="Observação"
            type="textarea"
            name="obs"
            value={values.obs}
            onChange={handleChange}
          />
          <div
            style={{
              position: 'relative',
              width: '500px',
              justifyContent: 'center',
            }}
          >
            <OpenModal as={'submit'} onClick={() => setModalShow(true)}>
              {labelSelected.label}
            </OpenModal>
            <ModalTutor
              show={modalShow}
              setlabelselected={setLabelSelected}
              onHide={() => setModalShow(false)}
              labelselected={labelSelected}
            />
          </div>

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

export default EditPet;
