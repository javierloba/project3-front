import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Spinner from '../../General/Spinner/Spinner';
import { withAuth } from '../../../context/auth.context';

// Route that forbids access to a user who is not logged in

function PrivateRoute ({ isLoggedIn, isLoading, user, exact, path, component_user, component_login }) {
  // Value coming from `AuthProvider` ( via `withAuth` )

  // Values coming from the PrivateRoute itself
  const ComponentForUser = component_user;
  // const ComponentForAdmin = component_admin;
  // const ComponentForWorker = component_worker
  const ComponentForLogin = component_login

  // If AuthProvider is still making request to check the user
  if (isLoading) return <Spinner />;

  return (
    <Route
      exact={exact}
      path={path}
      render={
        function(props) {
          if (!isLoggedIn) return <ComponentForLogin {...props}/>
          else if (isLoggedIn) return <ComponentForUser />
          // else if (isLoggedIn && worker.role === "admin") return <ComponentForAdmin {...props} />
          // else if (isLoggedIn && worker.role === "worker") return <ComponentForWorker {...props} />
        }
      }
    />
    )
}

export default withAuth(PrivateRoute);