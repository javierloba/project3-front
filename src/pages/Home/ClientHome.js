import React from 'react';
import { withAuth } from '../../context/auth.context';
import { withUser } from '../../context/user.context';
import { withWorker } from '../../context/worker.context';
import { withService } from '../../context/service.context';
import { withReserve } from '../../context/reserve.context';
import { Link } from 'react-router-dom';

import HomeUserAccordion from '../../components/General/Acordion/HomeUserAccordion'

function ClientHome() {
    return (
        <div>
            <HomeUserAccordion />
        </div>
    )
}

export default withAuth(withUser(withWorker(withService(withReserve(ClientHome)))));