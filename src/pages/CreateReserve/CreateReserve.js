import React, { Component } from "react";
import { withRouter } from "react-router";
import { withAuth } from '../../context/auth.context';
import { withUser } from '../../context/user.context';
import { withWorker } from '../../context/worker.context';
import { withService } from '../../context/service.context';
import { withReserve } from '../../context/reserve.context';
import reserveService from "../../services/reserve.service";

class CreateReserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        user_id: "",
        worker_id: "",
        reservation_date: "",
        status: "",
        service_id: "",
        assigned_worker: "",
      },
    };
    this.reserveService = new reserveService();
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.createReserve(this.state.fields);
    await this.props.history.push("/");
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      }
    });
  }

  render() {
      const { fields } = this.state;
    return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
                <label htmlFor="user_id">User Id:</label>
                <input type="text" name="user_id" value={fields.user_id} onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
                <label htmlFor="worker_id">Worker Id:</label>
                <input type="text" name="worker_id" value={fields.worker_id} onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
                <label htmlFor="reservation_date">Reservation date:</label>
                <input type="text" name="reservation_date" value={fields.reservation_date} onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
                <label htmlFor="status">Reserva status:</label>
                <input type="text" name="status" value={fields.status} onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
                <label htmlFor="service_id">Service Id:</label>
                <input type="text" name="service_id" value={fields.service_id} onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
                <label htmlFor="assigned_worker">Assigned work:</label>
                <input type="text" name="assigned_worker" value={fields.assigned_worker} onChange={(e) => this.handleChange(e)} />
            </div>
            <button type="submit">Create Reserve</button>
        </form>
    )
  }
}

export default withAuth(withService(withReserve(withWorker(withUser(withRouter(CreateReserve))))));