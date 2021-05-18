import React from 'react'
import { withAuth } from '../../../context/auth.context';
import { withWorker } from '../../../context/worker.context';

function WorkerItem({name, surname, email, phone_number}) {

    
    return (

        <div class="list-group">
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{name} {surname}</h5>
            </div>
            <p class="mb-1">E-mail: {email} </p>
            <p class="mb-1">Teléfono: {phone_number}</p>
        </div>
    )
}

export default withAuth(withWorker(WorkerItem));