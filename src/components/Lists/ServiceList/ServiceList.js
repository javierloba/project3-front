import React, { Component } from "react";
import { withAuth } from "../../../context/auth.context";
import { withService } from "../../../context/service.context";
import ServiceItem from "../ServiceItem/ServiceItem";
import AdminNavbar from "../../../components/General/Navbar/AdminNavbar";

class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
    };
  }

  deleteService = async (serviceId) => {
    await this.props.deleteService(serviceId);
  };

  displayServices() {
    if (this.props.serviceList) {
      return this.props.serviceList.map((service) => {
        return (
          <div>
            <ServiceItem
              key={service._id}
              {...service}
              deleteService={this.deleteService}
            />
          </div>
        );
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <AdminNavbar />
        <div>{this.displayServices()}</div>
      </div>
    );
  }
}

export default withAuth(withService(ServiceList));
