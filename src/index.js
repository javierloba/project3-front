import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/auth.context';
import { UserProvider } from './context/user.context';
import { WorkerProvider } from './context/worker.context';
import { ServiceProvider } from './context/service.context';
import { ReserveProvider } from './context/reserve.context';

ReactDOM.render(
  <Router>
  <AuthProvider>
    <UserProvider>
      <WorkerProvider>
        <ServiceProvider>
          <ReserveProvider>
            <App />
          </ReserveProvider>
        </ServiceProvider>
      </WorkerProvider>
    </UserProvider>
  </AuthProvider>
  </Router>
, document.getElementById('root'));
