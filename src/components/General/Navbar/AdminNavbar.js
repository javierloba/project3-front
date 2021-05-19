import React, { Component } from "react";
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
          <h4>Home</h4>
        </Link>
        <button onClick={() => this.handleBack()}>Go back</button>
        <button onClick={() => this.handleForward()}>Go Forward</button>
        <button onClick={() => this.handleLogout()}>Logout</button>
        
      </nav>
    );
  }
}

export default withAuth(withRouter(AdminNavbar));
