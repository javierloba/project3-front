import React from 'react'
import { Link } from 'react-router-dom';
import { withAuth } from '../../../context/auth.context';
import { withService } from '../../../context/service.context';

function ServiceItem({name, image, duration, description, price, _id}) {

    return (
        <div className="list-group App">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{name}</h5>
                <small>{price}€</small>
                </div>
                <p className="mb-1">{description}</p>
                <small>{duration} min</small>
                <small><Link to={`/home/service/editarServicio/${_id}`} className="btn btn-primary btn-sm" role="button">Editar</Link></small>
                <small><Link to={`/home/service/editarServicio/${_id}`} className="btn btn-primary btn-sm" role="button">Borrar</Link></small>
        </div>
    )
}

export default withAuth(withService(ServiceItem));