import config from '../config';
import { toast } from 'react-toastify';

const URL_SESSIONS = `${config.URL_BACKEND}/sessions`;

function createSession(obj) {
  return fetch(`${URL_SESSIONS}`, {
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
      throw new Error('Não foi possível efetuar o Login, tente novamente.');
    })
    .catch((err) => {
      toast.error(err.message);
      console.log(err.message);
    });
}

export default {
  createSession,
};
