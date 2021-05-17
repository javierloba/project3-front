import React from 'react';
import { withAuth } from '../../context/auth.context';
import { withUser } from '../../context/user.context';
import { withWorker } from '../../context/worker.context';
import { withService } from '../../context/service.context';
import { withReserve } from '../../context/reserve.context'
import AdminHome from './AdminHome';
import ClientItem from '../../components/Lists/ClientItem/ClientItem'
import ClientList from '../../components/Lists/ClientList/ClientList'
import WorkerList from '../../components/Lists/WorkerList/WorkerList';

function Home(props) {


  let user = props.user.birthday;
  let role = props.user.role;

  return (
    <div>
      <h1>Home User Page</h1>
      {user ? <ClientList /> : null}
      {role === "Admin" ? <AdminHome /> : role === "Worker" ? <p>Soy un currito</p> : null}
    </div>
  )
}

export default withAuth(withUser(withWorker(withService(withReserve(Home)))));