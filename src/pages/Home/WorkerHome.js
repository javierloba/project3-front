import React from 'react';
import { withAuth } from '../../context/auth.context';
import { withUser } from '../../context/user.context';
import { withWorker } from '../../context/worker.context';
import { withService } from '../../context/service.context';
import { withReserve } from '../../context/reserve.context';

function WorkerHome() {
    return (
        <div>
        <h1>Home de currito</h1>
        </div>
    )
}

export default withAuth(withUser(withWorker(withService(withReserve(WorkerHome)))));