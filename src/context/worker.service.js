import React from 'react';
import workerService from '../services/worker.service';
import Spinner from '../components/General/Spinner/Spinner';

const { Consumer, Provider } = React.createContext();

class WorkerProvider extends React.Component {
    state = {
        workerDetail: {},
        workerList: []
    }

    workerService = new workerService();

    async componentDidMount(){
        try {
            const result = await this.workerService.showWorkers();
            const result2 = await this.workerService.showUserDetail();
            if (result) {
                this.setState({ isLoggedIn: true, isLoading: false, userList: result.data})
            }
            if (result2) {
                this.setState({ isLoggedIn: true, isLoading: false, userDetail: result.data})
            }
        } catch(err){
            this.setState({ isLoggedIn: false, isLoading: false, userList: null})
        }
    }

    showUser = async (data) => {
        try {
            const response = await this.showUser(data);
            if(response) {
                this.setState({...this.state, userList: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    showUserDetail = async (data) => {
        try {
            const response = await this.showUserDetail(data);
            if(response) {
                this.setState({...this.state, userDetail: response.data})
            }
        } catch(error) {
            console.error(error)
        }
    }

    editUser = async (data) => {
        try {
            const response = await this.editUser(data);
            if(response) {
                this.setState({...this.state, user: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    deleteUser = async (data) => {
        try {
            const response = await this.deleteUser(data);
            if(response) {
                this.setState({...this.state, user: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const { userDetail, userList } = this.state;

        return(
        <Provider value={{ userDetail, userList, showUser: this.showUser, showUserDetail: this.showUserDetail, editUser: this.editUser, deleteUser: this.deleteUser }}  >
            {this.props.children}
        </Provider>
        )
    }
}

const withUser = (WrappedComponent) => {

    return function (props) {
        return(
        <Consumer>
            { (value) => {
            const {  userDetail, userList, showUser, showUserDetail, editUser, deleteUser } = value;

            return (
                <WrappedComponent
                    userDetail={userDetail}
                    userList={userList}
                    showUser={showUser}
                    showUserDetail={showUserDetail}
                    editUser={editUser}
                    deleteUser={deleteUser}
                {...props}
                />
            )

            } }
        </Consumer>
        )
    }
}

export { UserProvider, withUser }