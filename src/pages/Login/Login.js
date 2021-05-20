import React, { Component } from "react";
import './Login.css';
import { withAuth } from '../../context/auth.context';
import { withUser } from '../../context/user.context';

class Login extends Component {
  state = { email: "", password: "" };

  

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    // Call function coming from AuthProvider ( via withAuth )
    this.props.login({ email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="login-clean">

      <form method="post" onSubmit={this.handleFormSubmit}>
          <div className="illustration"><i className="fas fa-rocket"></i></div>

          <div className="form-group">
          <input className="form-control" type="email" id="floatingInput" placeholder="name@example.com" name="email" value={email} onChange={this.handleChange}/>
          </div>

          <div className="form-group">
          <input className="form-control" type="password" id="floatingPassword" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
          </div>

          <div className="form-group">
          <button className="btn btn-block btn-primary" type="submit" value="Login">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(withUser(Login));