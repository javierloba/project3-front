import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/auth.context';
import { UserProvider } from './context/user.context';

ReactDOM.render(
  <Router>
  <AuthProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </AuthProvider>
  </Router>
, document.getElementById('root'));
