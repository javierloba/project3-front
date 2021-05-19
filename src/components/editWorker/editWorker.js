import React, { Component } from "react";
import './editWorker.css';
import { withAuth } from "../../context/auth.context";
import { withWorker } from "../../context/worker.context";
import { withRouter } from "react-router";
import workerService from "../../services/worker.service";
import AdminNavbar from "../../components/General/Navbar/AdminNavbar";


const EMAIL_PATTERN =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const validators = {
  password: (value) => {
    let message;
    if (!value) {
      message = "Password is required";
    }

    return message;
  },
  phone_number: (value) => {
    let message;
    if (!value) {
      message = "Phonenumber is required";
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
};

class EditWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        password: "",
        phone_number: "",
        email: "",
      },
    };
    this.workerService = new workerService();
  }

  async componentDidMount() {
    const result = await this.workerService.showWorkerDetail(
      this.props.match.params.id
    );
    this.setState({
      ...this.state,
      fields: result.data,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.editWorker(this.props.match.params.id, this.state.fields);
    await this.props.history.push("/");
  }

  handleChange(event) {
    const { name, value, type, files } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: type === "file" ? files[0] : value,
      },
      errors: {
        ...this.state.errors,
        [name]:
          type === "file"
            ? validators[name](files[0])
            : validators[name](value),
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
              <label htmlFor="password">Nueva contraseña:</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={fields.password}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone_number">Teléfono:</label>
              <input
                className="form-control"
                type="number"
                name="phone_number"
                value={fields.phone_number}
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
            <button className="btn btn-block btn-primary" type="submit">Actualizar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(withWorker(withRouter(EditWorker)));
