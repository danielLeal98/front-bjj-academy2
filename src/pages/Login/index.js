import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyled from '../../GlobalStyled';
import { Container, Section, Logo, ButtonLogin } from './styles';
import logoImg from '../../assets/logo-academia3.png';
import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import { toast } from 'react-toastify';
import sessionRepository from '../../repositories/sessions';
import { useHistory } from 'react-router-dom';
import md5 from 'md5';

function Login(props) {
  const initialValues = {
    email: '',
    password: '',
  };
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [infoUser, setInfoUser] = useState([]);
  const history = useHistory();

  return (
    <Container>
      <GlobalStyled />
      <ToastContainer autoClose={3000} className="toast-container" />
      <Section>
        <h1 style={{ color: 'black', marginBottom: '10px' }}>Flavio Leal - Alliance</h1>
        <Logo src={logoImg} />
        <form
          style={{ padding: '25px' }}
          onSubmit={function handleSubmit(info) {
            info.preventDefault();
            setInfoUser([...infoUser, values]);
            if (values.email === '') {
              toast.error(`O Campo Email precisa ser preenchido`);
              return false;
            } else if (values.password === '') {
              toast.error(`O Campo Senha precisa ser preenchido`);
              return false;
            }

            sessionRepository
              .createSession({
                email: values.email,
                password: md5(values.password),
              })
              .then((response) => {
                if (response.message === 1) {
                  localStorage.setItem('token', response.token);
                  localStorage.setItem('name', response.user);
                  localStorage.setItem('storedData', new Date().getTime());
                  history.push('/home');
                  window.location.reload();
                } else {
                  toast.error(`Email ou senha inválido, tente novamente!`);
                  clearForm();
                }
              });
          }}
        >
          <FormField label="Email" type="email" name="email" value={values.email} onChange={handleChange} />
          <FormField label="Senha" type="password" name="password" value={values.password} onChange={handleChange} />
          <ButtonLogin>
            Entrar <i className="fas fa-sign-in-alt"></i>
          </ButtonLogin>
        </form>
      </Section>
    </Container>
  );
}

export default Login;
