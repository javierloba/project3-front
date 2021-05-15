import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { withAuth } from './../../context/auth.context';

// Route that forbids access to a user who is not logged in

function PrivateRoute ({ isLoggedIn, isLoading, user, worker, component_client, component_admin, component_worker }) {
  // Value coming from `AuthProvider` ( via `withAuth` )

  // Values coming from the PrivateRoute itself
  const ComponentForClient = component_client;
  const ComponentForAdmin = component_admin;
  const ComponentForWorker = component_worker

  const { exact, path } = routeProps;

  // If AuthProvider is still making request to check the user
  if (isLoading) return <Spinner />;

  return (
    <Route
      exact={exact}
      path={path}
      render={
        function(props) {
          if (!isLoggedIn) return <Redirect to="/login" />
          else if (isLoggedIn && user) return <ComponentForClient {...props} />
          else if (isLoggedIn && worker.role === "admin") return <ComponentForAdmin {...props} />
          else if (isLoggedIn && worker.role === "worker") return <ComponentForWorker {...props} />
        }
      }
    />
    )
}

export default withAuth(PrivateRoute);