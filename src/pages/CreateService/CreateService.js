import React, { Component } from "react";

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
  price: (value) => {
    let message;
    if (!value) {
      message = "Price of service is required";
    }
  },
};

export default class CreateService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      duration: "",
      description: "",
      price: "",
      worker_id: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.props.createService(this.state.fields);
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
          <label htmlFor="name">Service name:</label>
          <input
            type="text"
            name="name"
            value={fields.name}
            onCHange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            value={fields.image}
            onCHange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration:</label>
          <input
            type="number"
            name="duration"
            value={fields.duration}
            onCHange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            value={fields.description}
            onCHange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={fields.price}
            onCHange={(e) => this.handleChange(e)}
          />
        </div>
        <button type="submit">Create client</button>
      </form>
    );
  }
}

//por acabar