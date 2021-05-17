import React from 'react';
import { withAuth } from '../../context/auth.context';
import { withUser } from '../../context/user.context';
import ClientItem from '../../components/Lists/ClientItem/ClientItem'

function Home(props) {


  let user = props.user.birthday;
  let role = props.user.role;

  return (
    <div>
      <h1>Home User Page</h1>
      {user ? <ClientItem {...props} /> : null}
      {role === "Admin" ? <p>Estoy funcionando como Admin</p> : role === "Worker" ? <p>Soy un currito</p> : null}
    </div>
  )
}

export default withAuth(withUser(Home));