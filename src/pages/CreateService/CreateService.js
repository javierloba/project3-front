import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import { withService } from "../../context/service.context";
import { withRouter } from "react-router";
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
  duration: (value) => {
    let message;
    if (!value) {
      message = "Service duration is required";
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
  price: (value) => {
    let message;
    if (!value) {
      message = "Price of service is required";
    }
  },
};

class CreateService extends Component {
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
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.createService(this.state.fields);
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

  isValid() {
    const { errors } = this.state;
    return !Object.keys(errors).some((key) => errors[key]);
  }

  render() {
    const { fields } = this.state;
    return (
      <div>
        <AdminNavbar />
        <div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
              <label htmlFor="name">Service name:</label>
              <input
                type="text"
                name="name"
                value={fields.name}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="image">Image:</label>
              <input
                type="text"
                name="image"
                value={fields.image}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="duration">Duration:</label>
              <input
                type="number"
                name="duration"
                value={fields.duration}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                name="description"
                value={fields.description}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                name="price"
                value={fields.price}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="price">Worker ID:</label>
              <input
                type="string"
                name="worker_id"
                value={fields.worker_id}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button type="submit">Create Service</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(withService(withRouter(CreateService)));
