import React, { Component } from "react";
import { withAuth } from "../../../context/auth.context";
import { withUser } from "../../../context/user.context";
import ClientItem from "../ClientItem/ClientItem";
import { Link } from 'react-router-dom';

class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
    };
  }

  deleteUser = async (userId) => {
    await this.props.deleteUser(userId)
  }

  displayClients() {
    if (this.props.userList) {
      return this.props.userList.map((user) => {
        return (
          <div>
            <ClientItem key={user.id} {...user} deleteUser={this.deleteUser}/>
          </div>
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
