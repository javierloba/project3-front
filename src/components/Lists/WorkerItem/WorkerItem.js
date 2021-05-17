import React from 'react'
import { withAuth } from '../../../context/auth.context';
import { withWorker } from '../../../context/worker.context';

function WorkerItem({name, surname, email, phone_number}) {

    
    return (
        <div>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{email}</p>
            <p>{phone_number}</p>        
        </div>
    )
}

export default withAuth(withWorker(WorkerItem));