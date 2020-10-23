import React from 'react';
import './header.css';
import logo from '../../assets/logo-academia.png';
import { useHistory } from 'react-router-dom';

function Header() {
  const userName = localStorage.getItem('name');
  const history = useHistory();

  function logout() {
    localStorage.clear();
    history.push('/');
  }
  return (
    <div className="navbar">
      <div className="firstDiv">
        <img src={logo} alt="logo" />
      </div>
      <a href="/home">
        <i className="fas fa-home"></i> Home
      </a>
      <div className="subnav">
        <button className="subnavbtn">
          <i class="fas fa-chalkboard-teacher"></i> Turmas
        </button>
        <div className="subnav-content">
          <a href="/createTutor">
            <i className="fas fa-plus-square"></i> Cadastrar Turma
          </a>
          <a href="/listTutor">
            <i className="fas fa-list"></i> Lista de Turmas
          </a>
        </div>
      </div>
      <div className="subnav">
        <button className="subnavbtn">
          <i className="fa fa-fw fa-user"></i> Alunos
        </button>
        <div className="subnav-content">
          <a href="/createPet">
            <i className="fas fa-plus-square"></i> Cadastrar Aluno
          </a>
          <a href="/listPet">
            <i className="fas fa-list"></i> Lista de Alunos
          </a>
        </div>
      </div>
      <div className="subnav">
        <button className="subnavbtn">
          <i className="fas fa-users"></i> Usuários
        </button>
        <div className="subnav-content">
          <a href="/createUser">
            <i className="fas fa-plus-square"></i> Cadastrar Usuário
          </a>
          <a href="/listUser">
            <i className="fas fa-list"></i> Lista de Usuários
          </a>
        </div>
      </div>
      <div className="subnav" style={{ float: 'right' }}>
        <button className="subnavbtn">
          <i className="fas fa-user-circle"></i> {userName}
        </button>
        <div className="subnav-content" onClick={() => logout()}>
          <a href="/">
            <i className="fas fa-sign-out-alt"></i> Logout
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
