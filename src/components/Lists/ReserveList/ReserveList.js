import React, { Component } from "react";
import { withAuth } from "../../../context/auth.context";
import { withReserve } from "../../../context/reserve.context";
import ReserveItem from "../ReserveItem/ReserveItem";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../components/General/Navbar/AdminNavbar";
import WebCalendar from "../../../components/General/WebCalendar/WebCalendar";

class ReserveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserve: [],
    };
  }

  deleteReserve = async (reserveId) => {
    await this.props.deleteReserve(reserveId);
  };

  displayReserve() {
    if (this.props.reserveList) {
      return this.props.reserveList.map((reserve) => {
        return (
          <div>
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
          <WebCalendar />
          <Link to="/home/admin/crearReserva">Crear Reserva</Link>
          {this.displayReserve()}
        </div>
      </div>
    );
  }
}

export default withAuth(withReserve(ReserveList));
