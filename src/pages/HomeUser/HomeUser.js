import React from 'react';
import { withAuth } from '../../context/auth.context';

function HomeUser(props) {
  return (
    <div> 
      <h1>Home User Page</h1>
      <p>{props.user.birthday}</p>
      <p>{props.user.role}</p>
    </div>
  )
}

export default withAuth(HomeUser);