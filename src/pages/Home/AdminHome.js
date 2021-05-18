import React from "react";
import HomeAdminAccordion from '../../components/General/Acordion/HomeAdminAccordion';
import WebCalendar from '../../components/General/WebCalendar/WebCalendar';

import { withAuth } from '../../context/auth.context';
import { withUser } from '../../context/user.context';
import { withWorker } from '../../context/worker.context';
import { withService } from '../../context/service.context';
import { withReserve } from '../../context/reserve.context';
import { Link } from 'react-router-dom';

function AdminHome() {
  return (
    <div>
      <h1>Home de admin</h1>
      <HomeAdminAccordion />
      <WebCalendar />
      <Link to="/home/admin/listaReservas" className="btn btn-primary" role="button">Gestionar reservas</Link>
    </div>
  );
}

export default withAuth(withUser(withWorker(withService(withReserve(AdminHome)))));