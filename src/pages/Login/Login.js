import React, { Component } from "react";
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
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>Email:</label>
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={email} onChange={this.handleChange}/>

          <label>Password:</label>
          <input className="form-control" id="floatingPassword" placeholder="Password" type="password" name="password" value={password} onChange={this.handleChange} />

          <button className="w-100 btn btn-lg btn-primary" type="submit" value="Login">Login</button>
        </form>
      </div>
    );
  }
}

export default withAuth(withUser(Login));