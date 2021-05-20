import React, { Component } from "react";
import './ReserveList.css';
import { withAuth } from "../../../context/auth.context";
import { withReserve } from "../../../context/reserve.context";
import ReserveItem from "../ReserveItem/ReserveItem";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../components/General/Navbar/AdminNavbar";

class ReserveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserve: [],
    };
  }

  deleteReserve = async (reserveId) => {
    await this.props.deleteReserve(reserveId);
    window.location.reload();
  };

  displayReserve() {
    if (this.props.reserveList) {
      return this.props.reserveList.map((reserve) => {
        return (
          <div className="reserve-list">
            <ReserveItem
              key={reserve.id}
              {...reserve}
              deleteReserve={this.deleteReserve}
            />
          </div>
        );
      });
    } else {
      return null;
    }
  }

  displayReserveUser() {
    if (this.props.reserveList) {
      return this.props.reserveList.map((reserve) => {
        return (
          reserve.assigned_client && reserve.assigned_client.id === this.props.user.id &&
          <div className="reserve-list">
            <ReserveItem
              key={reserve.id}
              {...reserve}
              deleteReserve={this.deleteReserve}
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
        <div>
          {this.displayReserveUser()}
        </div>
      </div>
    );
  }
}

export default withAuth(withReserve(ReserveList));
