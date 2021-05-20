import React from 'react';
import './ReserveItem.css';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { withAuth } from '../../../context/auth.context';
import { withReserve } from '../../../context/reserve.context';
import { Link } from 'react-router-dom';

function ReserveItem({_id, user_id, worker_id, reservation_date, status, service_id, service_name, assigned_worker, assigned_client}) {

    return (

        <div className="list-group App">
            <div className="d-flex w-100 justify-content-between">
            {assigned_client && <h5 className="mb-1">{assigned_client.name}</h5>}
            </div>
            {assigned_worker && <p className="mb-1">{assigned_worker.name} </p>}
            <p className="mb-1">{format(new Date(reservation_date), 'dd MMM yyyy, hh:mm', { locale: es })}</p>
            <small>{service_name}</small>
            <div className="btn-list">
                <small><Link to={`/home/reserve/editarReserva/${_id}`} className="btn btn-primary btn-sm" role="button">Editar</Link></small>
                <small><button className="btn btn-primary btn-sm" onClick={() => deleteReserve(_id)}>
                  Borrar
                </button></small>
            </div>
        </div>
    )
}

export default withAuth(withReserve(ReserveItem));
