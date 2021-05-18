import React from 'react';
import { withAuth } from '../../../context/auth.context';
import { withReserve } from '../../../context/reserve.context';

function ReserveItem({user_id, worker_id, reservation_date, status, service_id, assigned_worker}) {

    return (

        <div className="list-group">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{user_id}</h5>
            </div>
            <p className="mb-1">{worker_id} </p>
            <p className="mb-1">{reservation_date}</p>
            <small>{status}</small>
            <small>{service_id}</small>
            <small>{assigned_worker}</small>
        </div>
    )
}

export default withAuth(withReserve(ReserveItem));
