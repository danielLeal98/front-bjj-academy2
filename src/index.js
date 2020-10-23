import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Login from './pages/Login';
import Home from './pages/Home';
import ListPet from './pages/Pets/List';
import ListTutor from './pages/Tutors/List';
import ListUser from './pages/Users/List';
import CreatePet from './pages/Pets/Create';
import CreateTutor from './pages/Tutors/Create';
import CreateUser from './pages/Users/Create';
import EditPet from './pages/Pets/Edit';
import EditTutor from './pages/Tutors/Edit';
import EditUser from './pages/Users/Edit';

const isToken = localStorage.getItem('token');
const tokenDefault = 'teste';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {tokenDefault ? (
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/listPet" component={ListPet} />
          <Route path="/listTutor" component={ListTutor} />
          <Route path="/listUser" component={ListUser} />
          <Route path="/createPet" component={CreatePet} />
          <Route path="/createTutor" component={CreateTutor} />
          <Route path="/createUser" component={CreateUser} />
          <Route path="/editTutor" component={EditTutor} />
          <Route path="/editPet" component={EditPet} />
          <Route path="/editUser" component={EditUser} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Route exact path="/" to={Login} component={Login} />
        </React.Fragment>
      )}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
