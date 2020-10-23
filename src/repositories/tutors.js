import config from '../config';
import { toast } from 'react-toastify';

const URL_TUTORS = `${config.URL_BACKEND}/tutors`;

function getAllTutors() {
  return fetch(`${URL_TUTORS}`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }
      throw new Error('Não foi possível pegar os dados dos Tutors');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}
function getTutorById(id) {
  return fetch(`${URL_TUTORS}/${id}`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }
      throw new Error('Não foi possível pegar os dados do Tutor selecionado');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}

function createTutor(obj) {
  return fetch(`${URL_TUTORS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (response) => {
      if (response.ok) {
        toast.success('Tutor cadastrado com sucesso');
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível cadastrar os dados dos Tutors');
    })
    .catch((err) => {
      toast.error(err.message);
    });
}

function deleteTutor(obj) {
  return fetch(`${URL_TUTORS}/${obj}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        toast.success('Tutor deletado com Sucesso!');
        return result;
      } else {
        toast.error('Não foi possível deletar o Tutor selecionado');
        throw new Error('Não foi possível deletar o Tutor selecionado');
      }
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}
function updateTutor(id, tutor) {
  return fetch(`${URL_TUTORS}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(tutor),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }
      throw new Error('Não foi possível pegar os dados dos Tutors');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}

export default {
  getAllTutors,
  getTutorById,
  createTutor,
  updateTutor,
  deleteTutor,
};
