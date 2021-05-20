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
import ReserveList from "./components/Lists/ReserveList/ReserveList";
import CreateClient from "./pages/CreateClient/CreateClient";
import CreateWorker from "./pages/CreateWorker/createWorker";
import createService from "./pages/CreateService/CreateService";
import CreateReserve from "./pages/CreateReserve/CreateReserve"
import EditClient from "./components/EditClient/EditClient";
import EditWorker from "./components/editWorker/editWorker";
import EditService from "./components/EditService/EditService";
import EditReserve from "./components/EditReserve/EditReserve";
import ReserveClient from "./pages/ReserveClient/ReserveClient";

class App extends Component {
  
 
  render() {
    return (
    <Switch>
          <PrivateRoute exact path="/" component_login={Login} component_user={Home}/>
          <PrivateRoute exact path="/home/admin/listaServicios" component_user={ServiceList} component_login={Login} />
          <PrivateRoute exact path="/home/admin/listaClientes" component_user={ClientList} component_login={Login} />
          <PrivateRoute exact path="/home/admin/listaTrabajadores" component_user={WorkerList} component_login={Login} />
          <PrivateRoute exact path="/home/admin/listaReservas" component_user={ReserveList} component_login={Login} />
          <PrivateRoute exact path="/home/admin/crearReserva" component_user={CreateReserve} component_login={Login} />
          <PrivateRoute exact path="/home/admin/crearCliente" component_user={CreateClient} component_login={Login} />
          <PrivateRoute exact path="/home/admin/crearTrabajador" component_user={CreateWorker} component_login={Login} />
          <PrivateRoute exact path="/home/admin/crearServicio" component_user={createService} component_login={Login} />
          <PrivateRoute exact path="/home/user/editarCliente/:id" component_user={EditClient} component_login={Login} />
          <PrivateRoute exact path="/home/worker/editarTrabajador/:id" component_user={EditWorker} component_login={Login} />
          <PrivateRoute exact path="/home/service/editarServicio/:id" component_user={EditService} component_login={Login} />
          <PrivateRoute exact path="/home/reserve/editarReserva/:id" component_user={EditReserve} component_login={Login} />
          <PrivateRoute exact path="/home/reserve/reservas" component_user={ReserveClient} component_login={Login} />
        </Switch>
    );
  }
}

export default withAuth(App);
