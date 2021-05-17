import React from 'react';
import serviceService from '../services/service.service';
import Spinner from '../components/General/Spinner/Spinner';

const { Consumer, Provider } = React.createContext();

class ServiceProvider extends React.Component {
    state = {
        isLoggedIn: false,
        isLoading: true,
        user: null
      }

      authService = new authService();

  async componentDidMount(){
    try {
      const result = await this.authService.isLoggedIn();
      console.log(result)
      if (result) {
        this.setState({ isLoggedIn: true, isLoading: false, user: result.data})
      }
    } catch(err){
      this.setState({ isLoggedIn: false, isLoading: false, user: null})
    }
  }

  
}