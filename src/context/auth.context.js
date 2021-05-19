import React from 'react';
import authService from '../services/auth.service';
import Spinner from '../components/General/Spinner/Spinner';

const { Consumer, Provider } = React.createContext();


class AuthProvider extends React.Component {
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

  createWorker = async (data) => {
    try {
      const response = await this.authService.createWorker(data);
      if(response){
        this.setState({ isLoggedIn: true})
      }
    } catch (err) {
      this.setState({ isLoggedIn: false, user: null})
    }
  }
  

  createUser = async (data) => {
    try {
      console.log(data)
      const response = await this.authService.createUser(data);
      console.log(response)
      if(response){
        this.setState({ isLoggedIn: true})
      }
    } catch (err) {
      this.setState({ isLoggedIn: false, user: null})
    }
  }

  login = async (data) => {
    try {
      const response = await this.authService.login(data);
      if(response){
        this.setState({ isLoggedIn: true, user: response.data})
      }
    } catch (err) {
      this.setState({ isLoggedIn: false, user: null })
    }
  }

  logout = async() => {
    try {
      const response = await this.authService.logout();
      if(response){
        this.setState({ isLoggedIn: false, user: null })
      }
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { isLoggedIn, isLoading, user } = this.state;

    if (isLoading) return <Spinner />;

    return(
      <Provider value={{ isLoggedIn, isLoading, user, createUser: this.createUser, createWorker: this.createWorker, login: this.login, logout: this.logout }}  >
        {this.props.children}
      </Provider>
    )
  }

}


// HOC that converts regular component into a Consumer
const withAuth = (WrappedComponent) => {

  return function (props) {
      return(
        <Consumer>
          { (value) => {
            const { isLoggedIn, isLoading, user, createUser, createWorker, login, logout } = value;

            return (
              <WrappedComponent
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                user={user}
                createUser={createUser}
                createWorker={createWorker}
                login={login}
                logout={logout}
                {...props}
              />
            )

          } }
        </Consumer>
        )
    }
}


export { AuthProvider, withAuth }