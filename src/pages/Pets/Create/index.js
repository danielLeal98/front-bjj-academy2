import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { toast } from 'react-toastify';
import { ButtonCadastrar, DivButton, ClearForm, OpenModal } from './styles';
import { useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import petsRepository from '../../../repositories/pets';
import './pet.css';
import ModalTutor from '../../../components/ModalTutor';

function CreatePet(props) {
  const [labelSelected, setLabelSelected] = useState({
    value: '',
    label: 'Selecione o Tutor',
  });
  const initialValues = {
    name: '',
    date_nasc: ' ',
    breed: '',
    vaccine: '',
    obs: '',
    tutorId: labelSelected.value,
  };

  const history = useHistory();
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [pets, setPets] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  return (
    <PageDefault>
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
      >
        <form
          onSubmit={function handleSubmit(info) {
            info.preventDefault();
            setPets([...pets, values]);

            console.log(values);
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

            petsRepository
              .createPet({
                name: values.name,
                date_nasc: values.date_nasc.split('-').reverse().join('-'),
                tutorId: Number(labelSelected.value),
                breed: values.breed,
                vaccine: values.vaccine,
                obs: values.obs,
              })
              .then((response) => {
                if (response === true) {
                  history.push('/listPet');
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
            Cadastro de Pets <i className="fa fa-fw fa-dog"></i>
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
              value={values.tutorId}
            />
          </div>

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

export default CreatePet;
