import React from 'react'
import { withAuth } from '../../../context/auth.context';
import { withWorker } from '../../../context/worker.context';
import { Link } from 'react-router-dom';

function WorkerItem({_id, name, surname, email, phone_number}) {

    return (
        <div className="list-group">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{name} {surname}</h5>
            </div>
            <p className="mb-1">E-mail: {email} </p>
            <p className="mb-1">Teléfono: {phone_number}</p>
            <small><Link to={`/home/worker/editarTrabajador/${_id}`} className="btn btn-primary btn-sm" role="button">Editar</Link></small>
            <small><Link to={`/home/worker/editarTrabajador/${_id}`} className="btn btn-primary btn-sm" role="button">Borrar</Link></small>
        </div>
    )
}

export default withAuth(withWorker(WorkerItem));