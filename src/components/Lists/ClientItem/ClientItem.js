import React from 'react'
import { withAuth } from '../../../context/auth.context'

function ClientItem({name, surname, email, phone_number, client_antiquity, birthday}) {

    
    return (
        <div>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{email}</p>
            <p>{phone_number}</p>
            <p>{client_antiquity}</p>
            <p>{birthday}</p>
        </div>
    )
}

export default withAuth(ClientItem);
