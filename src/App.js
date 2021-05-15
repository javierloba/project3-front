import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Private from "./pages/Private/Private";


// Components
import Navbar from "./components/Navbar/Navbar";
import AnonRoute from "./components/AnonRoute/AnonRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <PrivateRoute path="/" />
          <PrivateRoute exact path="/home-client"
          component_client={Home}
          component_admin={Home_admin}
          component_worker={Home_worker} />
          <PrivateRoute exact path="/home-admin"
          component_client={Home}
          component_admin={Home_admin}
          component_worker={Home_worker} />
          <PrivateRoute exact path="/home-worker"
          component_client={Home}
          component_admin={Home_admin}
          component_worker={Home_worker} />
          <AnonRoute exact path="/login" component={Login} />

        </Switch>
      </div>
    );
  }
}

export default App;
