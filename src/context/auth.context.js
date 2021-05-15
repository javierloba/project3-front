import React from 'react';
import authService from '../services/auth.service';

const { Consumer, Provider } = React.createContext();


class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: true,
    user: null,
    worker: null
  }

  authService = new authService();

  async componentDidMount(){
    try {
      const result = await this.authService.isLoggedIn();
      if (result) {
        this.setState({ isLoggedIn: true, isLoading: false, user: result.data, worker: result.data})
      }
    } catch(err){
      this.setState({ isLoggedIn: false, isLoading: false, user: null, worker: null})
    }
  }

  createWorker = async (data) => {
    try {
      const response = await this.authService.createWorker(data);
      if(response){
        this.setState({ isLoggedIn: true, user: response.data, worker: response.data })
      }
    } catch (err) {
      this.setState({ isLoggedIn: false, user: null, worker: null})
    }
  } 

  editWorker = (data) => {
    this.editWorker(data)
    .then(response => this.setState({...this.state, user: response.data, worker: response.data }))
    .catch(error => console.error(error))
  }

  createClient = async (data) => {
    try {
      const response = await this.authService.createClient(data);
      if(response){
        this.setState({ isLoggedIn: true, user: response.data, worker: response.data })
      }
    } catch (err) {
      this.setState({ isLoggedIn: false, user: null, worker: null})
    }
  } 

  editClient = (data) => {
    this.editClient(data)
    .then(response => this.setState({...this.state, user: response.data, worker: response.data }))
    .catch(error => console.error(error))
  }
  
  login = (data) => {
    authService.login(data)
      .then((response) => this.setState({ isLoggedIn: true, user: response.data, worker: response.data }))
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null, worker: null });
      })
  }

  logout = () => {
    authService.logout()
      .then(() => this.setState({ isLoggedIn: false, user: null, worker: null }))
      .catch((err) => console.log(err));
  }


  render() {
    const { isLoggedIn, isLoading, user, worker } = this.state;

    if (isLoading) return <p>Loading</p>;

    return(
      <Provider value={{ isLoggedIn, isLoading, user, worker, createClient: this.createClient, createWorker: this.createWorker, editClient: this.editClient, editWorker: this.editWorker, login: this.login, logout: this.logout }}  >
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
            const {  isLoggedIn, isLoading, user, worker, createClient, createWorker, editClient, editWorker, login, logout } = value;

            return (
              <WrappedComponent
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                user={user}
                worker={worker}
                createClient={createClient}
                createWorker={createWorker}
                editClient={editClient}
                editWorker={editWorker}
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