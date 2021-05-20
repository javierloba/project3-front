import React from 'react';
import './ReserveItem.css';
import { withAuth } from '../../../context/auth.context';
import { withReserve } from '../../../context/reserve.context';
import { Link } from 'react-router-dom';

function ReserveItem({_id, user_id, worker_id, reservation_date, status, service_id, assigned_worker, deleteReserve}) {

    return (

        <div className="list-group App">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{user_id}</h5>
            </div>
            <p className="mb-1">{worker_id} </p>
            <p className="mb-1">{reservation_date}</p>
            <small>{status}</small>
            <small>{service_id}</small>
            <small>{assigned_worker}</small>
            <small><Link to={`/home/reserve/editarReserva/${_id}`} className="btn btn-primary btn-sm" role="button">Editar</Link></small>
            <small><button className="btn btn-primary btn-sm" onClick={() => deleteReserve(_id)}>
                  Borrar
                </button></small>
        </div>
    )
}

export default withAuth(withReserve(ReserveItem));
