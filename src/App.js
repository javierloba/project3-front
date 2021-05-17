import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

// Pages
import HomeUser from "./pages/HomeUser/HomeUser";
import HomeAdmin from "./pages/HomeAdmin/HomeAdmin";
import HomeWorker from "./pages/HomeWorker/HomeWorker";
import Login from "./pages/Login/Login";
// import Private from "./pages/Private/Private";


// Components
// import AnonRoute from "./components/Routes/AnonRoute/AnonRoute";
import PrivateRoute from "./components/Routes/PrivateRoute/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <PrivateRoute path="/" component_login={Login}/>
          <PrivateRoute exact path="/user/home"
          component_user={HomeUser}
          component_admin={HomeAdmin}
          component_worker={HomeWorker} />
          <PrivateRoute exact path="/admin/home"
          component_user={HomeUser}
          component_admin={HomeAdmin}
          component_worker={HomeWorker} />
          <PrivateRoute exact path="/worker/home"
          component_user={HomeUser}
          component_admin={HomeAdmin}
          component_worker={HomeWorker} />
          {/*<AnonRoute exact path="/login" component={Login} />*/}

        </Switch>
      </div>
    );
  }
}

export default App;
