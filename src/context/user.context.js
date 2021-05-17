import React from 'react';
import userService from '../services/user.service';

const { Consumer, Provider } = React.createContext();

class UserProvider extends React.Component {
    state = {
        userDetail: {},
        userList: []
    }

    userService = new userService();

    async componentDidMount(){
        try {
            const result = await this.userService.showUsers();
            const result2 = await this.userService.showUserDetail();
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

    showUsers = async (data) => {
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
        <Provider value={{ userDetail, userList, showUsers: this.showUsers, showUserDetail: this.showUserDetail, editUser: this.editUser, deleteUser: this.deleteUser }}  >
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
            const {  userDetail, userList, showUsers, showUserDetail, editUser, deleteUser } = value;

            return (
                <WrappedComponent
                    userDetail={userDetail}
                    userList={userList}
                    showUsers={showUsers}
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