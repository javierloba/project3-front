import React from 'react'

export default function WorkerItem({name, surname, email, phone_number}) {

    
    return (
        <div>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{email}</p>
            <p>{phone_number}</p>        
        </div>
    )
}
