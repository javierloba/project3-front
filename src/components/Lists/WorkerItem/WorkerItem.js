import React from 'react';
import './WorkerItem.css';
import { withAuth } from '../../../context/auth.context';
import { withWorker } from '../../../context/worker.context';
import { Link } from 'react-router-dom';


function WorkerItem({_id, name, surname, email, phone_number, deleteWorker}) {

    return (
        <div className="list-group-worker App">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{name} {surname}</h5>
            </div>
            <p className="mb-1">E-mail: {email} </p>
            <p className="mb-1">Teléfono: {phone_number}</p>
            <div className="btn-list">
                <small><Link to={`/home/worker/editarTrabajador/${_id}`} className="btn btn-primary btn-sm" role="button">Editar</Link></small>
                <small><button className="btn btn-primary btn-sm" onClick={() => deleteWorker(_id)}>Borrar</button></small>
            </div>
        </div>
    )
}

export default withAuth(withWorker(WorkerItem));