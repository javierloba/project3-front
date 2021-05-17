import React from 'react';
import { withAuth } from '../../context/auth.context';
import { withUser } from '../../context/user.context';
import { withWorker } from '../../context/worker.context';
import { withService } from '../../context/service.context';
import { withReserve } from '../../context/reserve.context';
import ClientItem from '../../components/Lists/ClientItem/ClientItem'

function ClientHome() {
    return (
        <div>
        <ClientItem />
        </div>
    )
}

export default withAuth(withUser(withWorker(withService(withReserve(ClientHome)))));