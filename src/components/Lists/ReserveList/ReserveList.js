import React, { Component } from "react";
import { withAuth } from "../../../context/auth.context";
import { withReserve } from "../../../context/reserve.context";
import ReserveItem from "../ReserveItem/ReserveItem";
import { Link } from 'react-router-dom';

import WebCalendar from '../../../components/General/WebCalendar/WebCalendar';

class ReserveList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        reserve: [],
        };
    }

    displayReserve() {
        if (this.props.reserveList) {
        return this.props.reserveList.map((reserve) => {
            return (
            <div>
            <Link to={`/home/reserve/editarReserva/${reserve._id}`} className="list-group-item list-group-item-action">
                <ReserveItem key={reserve._id} {...reserve} />
            </Link>
            </div>
            );
        });
        } else {
        return null;
        }
    }

    render() {
        return <div>
        
        <WebCalendar />
        {this.displayReserve()}
        </div>;
    }
}

export default withAuth(withReserve(ReserveList));