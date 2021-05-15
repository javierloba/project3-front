import React from "react";
import { withAuth } from "../../context/auth.context";
const EMAIL_PATTERN =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
import React, { Component } from "react";

const validators = {
  name: (value) => {
    let message;
    if (!value) {
      message = "Name is required";
    }
    return message;
  },
  suername: (value) => {
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
      name: "",
      surname: "",
      email: "",
      password: "",
      role: "",
      phone_number: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.props.createClient(this.state.fields);
    }
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
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={fields.name}
            onCHange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            name="surname"
            value={fields.surname}
            onCHange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={fields.email}
            onCHange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={fields.password}
            onCHange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            name="role"
            value={fields.role}
            onCHange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="phone_number">Phone number:</label>
          <input
            type="text"
            name="phone_number"
            value={fields.phone_number}
            onCHange={(e) => this.handleChange(e)}
          />
        </div>
        <button type="submit">Create client</button>
      </form>
    );
  }
}

export default withAuth(CreateWorker);
