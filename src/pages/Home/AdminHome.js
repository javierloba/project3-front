import React from "react";
import ServiceList from '../../components/Lists/ServiceList/ServiceList';
import ClientList from '../../components/Lists/ClientList/ClientList';
import WorkerList from '../../components/Lists/WorkerList/WorkerList';
import HomeAdminAccordion from '../../components/General/Acordion/HomeAdminAccordion';

import { withAuth } from '../../context/auth.context';
import { withUser } from '../../context/user.context';
import { withWorker } from '../../context/worker.context';
import { withService } from '../../context/service.context';
import { withReserve } from '../../context/reserve.context'
import { Link } from 'react-router-dom';

function AdminHome() {
  return (
    <div>
      <h1>Home de admin</h1>
      <HomeAdminAccordion />
      <Link to="/home/admin/crearCliente">Crear Cliente</Link>
      <Link to="/home/admin/crearTrabajador">Crear Trabajador</Link>
      <Link to="/home/admin/crearServicio">Crear Servicio</Link>
    </div>
  );
}

export default withAuth(withUser(withWorker(withService(withReserve(AdminHome)))));