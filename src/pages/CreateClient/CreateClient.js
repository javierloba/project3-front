import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import { withUser } from "../../context/user.context";
import { withRouter } from "react-router";
import AdminNavbar from "../../components/General/Navbar/AdminNavbar";
const EMAIL_PATTERN =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const validators = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Name is required";
    }
    return message;
  },
  surname: (value) => {
    let message;
    if (!value) {
      message = "Surname is required";
    }
    return message;
  },
  email: (value) => {
    let message;
    if (!value) {
      message = "Email is required";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Invalid email";
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = "Password is required";
    }
    return message;
  },
  birthday: (value) => {
    let message;
    if (!value) {
      message = "Birthday is required";
    }
    return message;
  },
  phone_number: (value) => {
    let message;
    if (!value) {
      message = "Phone number is required";
    }
    return message;
  },
  client_antiquity: (value) => {
    let message;
    if (!value) {
      message = "Surname is required";
    }
    return message;
  },
};

class CreateClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        client_number: 2,
        name: "",
        surname: "",
        email: "",
        password: "",
        birthday: "",
        phone_number: "",
      },
      errors: {
        name: null,
        surname: null,
        email: null,
        password: null,
        birthday: null,
        phone_number: null,
      },
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.createUser(this.state.fields);
    await this.props.history.push("/");
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name](value),
      },
    });
  }

  render() {
    const { fields } = this.state;
    return (
      <div>
        <AdminNavbar />
        <div>
          <h1>Create Client</h1>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={fields.name}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="surname">Surname:</label>
              <input
                type="text"
                name="surname"
                value={fields.surname}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                value={fields.email}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={fields.password}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="birthday">Birthday:</label>
              <input
                type="text"
                name="birthday"
                value={fields.birthday}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="phone_number">Phone number:</label>
              <input
                type="text"
                name="phone_number"
                value={fields.phone_number}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="client_antiquity">Client antiquity:</label>
              <input
                type="text"
                name="client_antiquity"
                value={fields.client_antiquity}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button type="submit" value="createUser">
              Create Client
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(withUser(withRouter(CreateClient)));
