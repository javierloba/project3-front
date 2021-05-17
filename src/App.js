import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import { withAuth } from './context/auth.context';

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";


// Components
import PrivateRoute from "./components/Routes/PrivateRoute/PrivateRoute";
import ServiceList from "./components/Lists/ServiceList/ServiceList";
import ClientList from "./components/Lists/ClientList/ClientList";
import WorkerList from "./components/Lists/WorkerList/WorkerList";
import CreateClient from "./pages/CreateClient/CreateClient";
import CreateWorker from "./pages/CreateWorker/createWorker";
import createService from "./pages/CreateService/CreateService";
// import AnonRoute from "./components/Routes/AnonRoute/AnonRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <PrivateRoute exact path="/" component_login={Login} component_user={Home}/>
          <PrivateRoute exact path="/home" component_user={Home} />
          <PrivateRoute exact path="/home/admin/listaServicios" component_user={ServiceList} />
          <PrivateRoute exact path="/home/admin/listaClientes" component_user={ClientList} />
          <PrivateRoute exact path="/home/admin/listaTrabajadores" component_user={WorkerList} />
          <PrivateRoute exact path="/home/admin/crearCliente" component_user={CreateClient}/>
          <PrivateRoute exact path="/home/admin/crearTrabajador" component_user={CreateWorker}/>
          <PrivateRoute exact path="/home/admin/crearServicio" component_user={createService}/>
        </Switch>
      </div>
    );
  }
}

export default withAuth(App);
