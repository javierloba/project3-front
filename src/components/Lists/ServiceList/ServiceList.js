import React, { Component } from "react";
import PublicService from "../../../services/public.service";
import ServiceItem from "../ServiceItem/ServiceItem";

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
