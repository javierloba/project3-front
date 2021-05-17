import React, { Component } from "react";
import { withAuth } from "../../../context/auth.context";
import { withUser } from "../../../context/user.context";
import ClientItem from "../ClientItem/ClientItem";

class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
    };
  }

  displayClients() {
    if (this.props.userList) {
      return this.props.userList.map((user) => {
        return (
          <ClientItem
            key={user.id}
            {...user}
          />
        );
      });
    } else {
      return null;
    }
  }
  
  render() {
    return <div>{this.displayClients()}</div>;
  }
}

export default withAuth(withUser(ClientList));
