import React from 'react';
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import TasksContainer from './components/Tasks/TasksContainer';
import Page404 from './components/Routes/Page404';
import Navbar from './components/Navbar/Navbar';
import AuthenticatedRoute from './components/Routes/AuthenticatedRoute';
import UnauthenticatedRoute from './components/Routes/UnauthenticatedRoute';
import DefaultRoute from './components/Routes/DefaultRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <UnauthenticatedRoute exact path='/login' Component={Login} />
          <UnauthenticatedRoute exact path='/register' Component={Register} />
          <AuthenticatedRoute exact path='/tasks' Component={TasksContainer} />
          <DefaultRoute exact path='/' Component={TasksContainer} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;