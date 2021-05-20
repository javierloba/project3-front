import React from 'react';
import './ClientItem.css';
import { withAuth } from '../../../context/auth.context';
import { withUser } from '../../../context/user.context';
import { Link } from 'react-router-dom';

function ClientItem({id, name, surname, email, phone_number, birthday, deleteUser}) {

    return (
        <div className="list-group-client App">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{name} {surname}</h5>
            </div>
            <p className="mb-1">E-mail: {email} </p>
            <p className="mb-1">Teléfono: {phone_number}</p>
            <small>Fecha de nacimiento: {birthday}</small>
            <div className="btn-list">
                <small><Link to={`/home/user/editarCliente/${id}`} className="btn btn-primary btn-sm" role="button">Editar</Link></small>
                <small><button className="btn btn-primary btn-sm" onClick={() => deleteUser(id)}>Borrar</button></small>
            </div>
        </div>
    )
}

export default withAuth(withUser(ClientItem));
