import React, { Component } from "react";
import './CreateWorker.css'
import { withAuth } from "../../context/auth.context";
import { withWorker } from "../../context/worker.context";
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
  role: (value) => {
    let message;
    if (!value) {
      message = "Role is required";
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
};

class CreateWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        surname: "",
        email: "",
        password: "",
        role: "",
        phone_number: "",
      },
      errors: {
        name: null,
        surname: null,
        email: null,
        password: null,
        role: null,
        phone_number: null,
      },
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.createWorker(this.state.fields);
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
        <div className="login-clean">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={fields.name}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Apellido:</label>
              <input
                className="form-control"
                type="text"
                name="surname"
                value={fields.surname}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input
                className="form-control"
                type="text"
                name="email"
                value={fields.email}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={fields.password}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Rol (worker/admin):</label>
              <input
                className="form-control"
                type="text"
                name="role"
                value={fields.role}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone_number">Teléfono:</label>
              <input
                className="form-control"
                type="text"
                name="phone_number"
                value={fields.phone_number}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button className="btn btn-block btn-primary" type="submit" value="createWorker">
              Crear empleado
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(withWorker(withRouter(CreateWorker)));
