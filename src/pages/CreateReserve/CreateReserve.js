import React, { Component } from 'react'
import { withAuth } from "../../context/auth.context";
import { withReserve } from "../../context/reserve.context";
import reserveService from "../../services/reserve.service";



export default class CreateReserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                user_id: "",
                worker_id: "",
                reservation_date: "",
                status: "",
                service_id: "",
                assigned_worker: ""
            }
        }
        this.reserveService = new reserveService();
    }

    handleSubmit(event) {
        event.preventDefault();
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
