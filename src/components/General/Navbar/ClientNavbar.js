import React, { Component } from "react";
import './ClientNavbar.css';
import { withAuth } from "../../../context/auth.context";
import { Link, withRouter } from "react-router-dom";

class ClientNavbar extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  handleBack = () => {
    this.props.history.goBack();
  };

  handleForward = () => {
    this.props.history.goForward();
  };

  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
      <Link to={"/"} id="home-btn">
      <div className="illustration"><i className="fas fa-rocket"></i></div>
      </Link>
      <button className="btn btn-block btn-primary" onClick={() => this.handleBack()}><i className="fas fa-angle-left"></i></button>
      <button className="btn btn-block btn-primary" onClick={() => this.handleForward()}><i className="fas fa-angle-right"></i></button>
      <button className="btn btn-block btn-primary" onClick={() => this.handleLogout()}><i className="fas fa-power-off"></i></button>
    </nav>
    );
  }
}

export default withAuth(withRouter(ClientNavbar));