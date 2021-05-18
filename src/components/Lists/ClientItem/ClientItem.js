import React from 'react';
import { withAuth } from '../../../context/auth.context';
import { withUser } from '../../../context/user.context';

function ClientItem({name, surname, email, phone_number, client_antiquity, birthday}) {

    return (

        <div class="list-group">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{name} {surname}</h5>
            </div>
            <p class="mb-1">E-mail: {email} </p>
            <p class="mb-1">Teléfono: {phone_number}</p>
            <small>Fecha de nacimiento: {birthday}</small>
        </div>
    )
}

export default withAuth(withUser(ClientItem));
