import config from '../config';
import { toast } from 'react-toastify';

const URL_USERS = `${config.URL_BACKEND}/users`;

function getAllUsers() {
  return fetch(`${URL_USERS}`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível pegar os dados dos Usuários');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}

function createUser(obj) {
  return fetch(`${URL_USERS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }
      throw new Error('Não foi possível cadastrar os dados dos Usuário');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}

function deleteUser(obj) {
  return fetch(`${URL_USERS}/${obj}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        toast.success('User deletado com Sucesso!');
        return result;
      } else {
        toast.error('Não foi possível deletar o User selecionado');
        throw new Error('Não foi possível deletar o User selecionado');
      }
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}
function updateUser(id, categoria) {
  return fetch(`${URL_USERS}/${id}`, {
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

      throw new Error('Não foi possível pegar os dados dos Usuários');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}

export default {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
