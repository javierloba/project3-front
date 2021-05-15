import React from 'react';
import privateService from '../services/private.service';

const { Consumer, Provider } = React.createContext();

class PrivateProvider extends React.Component {
    state = {
        isLoading: true,
        user: null

    }

    privateService = new privateService();

    
}