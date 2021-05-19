import React, { Component } from "react";
import './EditService.css'
import { withRouter } from "react-router";
import { withAuth } from "../../context/auth.context";
import { withService } from "../../context/service.context";
import serviceService from "../../services/service.service";
import AdminNavbar from "../../components/General/Navbar/AdminNavbar";


const validators = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Service name is required";
    }
    return message;
  },
  image: (value) => {
    let message;
    if (!value) {
      message = "Image is required";
    }
    return message;
  },
  description: (value) => {
    let message;
    if (!value) {
      message = "Service description is required";
    }
    return message;
  },
  duration: (value) => {
    let message;
    if (!value) {
      message = "Service duration is required";
    }
    return message;
  },
  price: (value) => {
    let message;
    if (!value) {
      message = "Price of service is required";
    }
  },
};

class EditService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        image: "",
        duration: "",
        description: "",
        price: "",
        worker_id: "",
      },
      errors: {
        name: null,
        image: null,
        duration: null,
        description: null,
        price: null,
        worker_id: null,
      },
    };
    this.serviceService = new serviceService();
  }

  async componentDidMount() {
    const result = await this.serviceService.showServiceDetail(
      this.props.match.params.id
    );
    this.setState({
      ...this.state,
      fields: result.data,
    });
  }

 async handleSubmit(event) {
    event.preventDefault();
    await this.props.editService(this.props.match.params.id, this.state.fields);
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
          <label htmlFor="name">Nombre del servicio:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={fields.name}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duración (en min):</label>
          <input
            className="form-control"
            type="number"
            name="duration"
            value={fields.duration}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <input
            className="form-control"
            type="text"
            name="description"
            value={fields.description}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio (en €):</label>
          <input
            className="form-control"
            type="number"
            name="price"
            value={fields.price}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <button className="btn btn-block btn-primary" type="submit">Actualizar</button>
        </div>
      </form>
        </div>
      </div>
    );
  }
}

export default withAuth(withService(withRouter(EditService)));
