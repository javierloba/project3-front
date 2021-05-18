import React from 'react'
import { Link } from 'react-router-dom';
import { withAuth } from '../../../../context/auth.context';
import { withService } from '../../../../context/service.context';

function ServiceItemAdmin({_id}) {
    return (
        <div>
            <small>
                <Link to={`/home/service/editarServicio/${_id}`}
                className="btn btn-primary btn-sm" role="button">
                Reservar
                </Link>
            </small>
        </div>
    )
}

export default withAuth(withService(ServiceItemAdmin));