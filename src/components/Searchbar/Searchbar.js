import React, { Component } from "react";

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleChange = (e) => {
    let { value } = e.target;
    this.setState({ search: value });
    this.props.search(this.state.search);
  };
  render() {
    return (
      <div>
        <input
          name="search"
          className="input"
          type="search"
          placeholder="Search..."
          value={this.state.search}
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }
}
