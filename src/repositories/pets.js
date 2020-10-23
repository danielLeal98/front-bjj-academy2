import config from '../config';
import { toast } from 'react-toastify';

const URL_PETS = `${config.URL_BACKEND}/pets`;

function getAllPets() {
  return fetch(`${URL_PETS}`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível pegar os dados dos Pets');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}

function createPet(obj) {
  return fetch(`${URL_PETS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (response) => {
      if (response.ok) {
        toast.success('Pet cadastrado com sucesso');
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível cadastrar os dados dos Pets');
    })
    .catch((err) => {
      toast.error(err.message);
    });
}

function deletePet(obj) {
  return fetch(`${URL_PETS}/${obj}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        toast.success('Pet deletado com Sucesso!');
        return result;
      } else {
        toast.error('Não foi possível deletar o pet selecionado');
        throw new Error('Não foi possível deletar o pet selecionado');
      }
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}
function updatePet(id, categoria) {
  return fetch(`${URL_PETS}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoria),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível pegar os dados dos Pets');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}

export default {
  getAllPets,
  createPet,
  updatePet,
  deletePet,
};
