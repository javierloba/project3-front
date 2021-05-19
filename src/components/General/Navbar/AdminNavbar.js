import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../../context/auth.context";
import authService from "../../../services/auth.service";

class AdminNavbar extends Component {
  constructor(props) {
    super(props);
    this.authService = new authService();
    this.handleBack = this.handleBack.bind(this)
  }

  handleLogout = () => {
    this.props.logout();
  };

  handleBack = () => {
    this.props.history.goBack();
  };
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link to={"/"} id="home-btn">
          <h4>Home</h4>
        </Link>
        <button onClick={() => this.handleBack()}>Go back</button>
        <button onClick={() => this.handleLogout()}>Logout</button>
      </nav>
    );
  }
}

export default withAuth(AdminNavbar);
