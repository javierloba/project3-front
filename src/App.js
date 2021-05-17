import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import { withAuth } from './context/auth.context';

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";


// Components
import PrivateRoute from "./components/Routes/PrivateRoute/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <PrivateRoute path="/" component_login={Login} component_user={Home}/>
          <PrivateRoute exact path="/user/home"
          component_user={Home} />
        </Switch>
      </div>
    );
  }
}

export default withAuth(App);
