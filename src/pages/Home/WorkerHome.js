import React from 'react';
import { withAuth } from '../../context/auth.context';
import { withUser } from '../../context/user.context';
import { withWorker } from '../../context/worker.context';
import { withService } from '../../context/service.context';
import { withReserve } from '../../context/reserve.context';
import { Link } from 'react-router-dom'

function WorkerHome() {
    // No implementada, pendiente en backlog
    return (
        <div>
        <h1>Home de currito</h1>
        <Link to="/home/worker/editarTrabajador">Editar Datos</Link>
        </div>
    )
}

export default withAuth(withUser(withWorker(withService(withReserve(WorkerHome)))));