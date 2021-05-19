import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../../context/auth.context';
import authService from "../../../services/auth.service";

class AdminNavbar extends Component {
  constructor(props) {
    super(props);
    this.authService = new authService();
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
   const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link to={'/'} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {this.props.isLoggedIn ? (
          <>
            <p>username: {this.props.user && this.props.user.username}</p>
            <button onClick={() => this.handleLogout()}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-button">Login</button>{' '}
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{' '}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(AdminNavbar);
