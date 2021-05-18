import React, { Component } from "react";
import { withAuth } from '../../../context/auth.context';
import { withService } from '../../../context/service.context';
import ServiceItem from '../ServiceItem/ServiceItem';
import { Link } from 'react-router-dom';

class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
    };
  }

  displayServices() {
    if (this.props.serviceList) {
      return this.props.serviceList.map((service) => {
        return (
          <div>
          <Link to={`/home/admin/editarServicio/${service._id}`} className="list-group-item list-group-item-action">
            <ServiceItem key={service._id} {...service} />
          </Link>
          </div>
        )
      })
    } else {
      return null;
    }
  }

  render() {
    return <div>{this.displayServices()}</div>;
  }
}

export default withAuth(withService(ServiceList));