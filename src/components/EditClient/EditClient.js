import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
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

class EditClient extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {
                password: "",
                phone_number: "",
                email: ""
            }
        }
    }

    handleSubmit(event){
        event.preventDefault();
        const uploadData = new FormData();
        Object.keys(this.state.fields).forEach(key => {
            uploadData.append(key, this.state.fields[key]);
        })
        this.props.editClient(uploadData)
    }

    handleChange(event){
        const { name, value, type, files } = event.target;
        this.setState({
          fields: {
            ...this.state.fields,
            [name]: type === 'file' ? files[0] : value
          },
          errors: {
            ...this.state.errors,
            [name]: type === 'file' ? validators[name](files[0]) : validators[name](value)
          }
        })
      }

  render() {
      const { fields } = this.state;
    return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
                <label htmlFor="password">New Password:</label>
                <input type="password" name="password" onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
                <label htmlFor="phone_number">New Phone number:</label>
                <input type="number" name="phone_number" onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
                <label htmlFor="email">New email:</label>
                <input type="text" name="email" onChange={(e) => this.handleChange(e)} />
            </div>
            <button type="submit">Update data</button>
        </form>
    );
  }
}

export default withAuth(EditClient)