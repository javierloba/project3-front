import React, { Component } from "react";
import './AdminNavbar.css';
import { Link } from "react-router-dom";
import { withRouter } from "react-router"
import { withAuth } from "../../../context/auth.context";

class AdminNavbar extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this)
  }

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

export default withAuth(withRouter(AdminNavbar));
