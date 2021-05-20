import React, { Component } from "react";
import './ClientReserveList.css';
import { withAuth } from "../../../context/auth.context";
import { withReserve } from "../../../context/reserve.context";
import ClientReserveItem from "../ClientReserveItem/ClientReserveItem";

class ClientReserveList extends Component {
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

    displayReserveUser() {
        if (this.props.reserveList) {
        return this.props.reserveList.map((reserve) => {
            return (
            reserve.assigned_client && reserve.assigned_client.id === this.props.user.id &&
            <div className="reserve-list">
                <ClientReserveItem
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
            {this.displayReserveUser()}
        </div>
        );
    }
}

export default withAuth(withReserve(ClientReserveList));
