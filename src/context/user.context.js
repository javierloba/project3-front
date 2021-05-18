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
            //const result2 = await this.userService.showUserDetail(id);
            if (result) {
                console.log(result)
                this.setState({userList: result.data})
            } //else
            // if (result2) {
            //     this.setState({userDetail: result.data})
            // }
        } catch(err){
            this.setState({userList: null})
        }
    }

    showUsers = async (data) => {
        try {
            const response = await this.userService.showUsers(data);
            if(response) {
                this.setState({...this.state, userList: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    showUserDetail = async (data) => {
        try {
            const response = await this.userService.showUserDetail(data);
            if(response) {
                this.setState({...this.state, userDetail: response.data})
            }
        } catch(error) {
            console.error(error)
        }
    }

    editUser = async (data) => {
        try {
            const response = await this.userService.editUser(data);
            if(response) {
                this.setState({...this.state, user: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    deleteUser = async (data) => {
        try {
            const response = await this.userService.deleteUser(data);
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