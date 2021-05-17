import React, { Component } from "react";
import { withAuth } from '../../../context/auth.context';
import { withUser } from '../../../context/user.context';

class ClientList extends Component {
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

export default withAuth(withUser(ClientList))
