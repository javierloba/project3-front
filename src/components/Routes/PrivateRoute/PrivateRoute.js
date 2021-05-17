import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Spinner from '../../General/Spinner/Spinner';
import { withAuth } from '../../../context/auth.context';

function PrivateRoute ({ isLoggedIn, isLoading, user, exact, path, component_user, component_login }) {
  const ComponentForUser = component_user;
  const ComponentForLogin = component_login

  if (isLoading) return <Spinner />;

  return (
    <Route
      exact={exact}
      path={path}
      render={
        function(props) {
          if (!isLoggedIn) return <ComponentForLogin {...props}/>
          else if (isLoggedIn) return <ComponentForUser />
        }
      }
    />
    )
}

export default withAuth(PrivateRoute);