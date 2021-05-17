import React, { Component } from "react";
import { withAuth } from '../../../context/auth.context';
import { withService } from '../../../context/service.context';

export default class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
    };
    this.publicService = new PublicService();
  }

  refreshState() {
    this.publicService
      .showServices()
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
  }

  displayServices() {
    const { services } = this.state;
    return services.map((service) => {
      return <ServiceItem {...service} key={service.id} />;
    });
  }

  render() {
    return <div>{this.displayServices()};</div>;
  }
}

export default withAuth(withService(ServiceList));