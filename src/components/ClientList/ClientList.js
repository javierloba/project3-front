import React, { Component } from "react";
import PrivateService from "../../services/private.service";
import ClientItem from "../ClientItem/ClientItem";

export default class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
    };
    this.privateService = new PrivateService();
  }

  refreshState() {
    this.privateService
      .showWorkers()
      .then((response) => {
        this.setState({ clients: response.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
  }

  displayWorkers() {
    const { clients } = this.state;
    return clients.map((client) => {
      return (
        <ClientItem
          refreshState={() => this.refreshState()}
          key={client.id}
          {...client}
        />
      );
    });
  }
  render() {
    return <div>{this.displayWorkers()}</div>;
  }
}
