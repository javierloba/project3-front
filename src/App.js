import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Private from './pages/Private/Private';

// Components
import Navbar from './components/Navbar/Navbar';
import AnonRoute from './components/AnonRoute/AnonRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <PrivateRoute exact path="/" />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
