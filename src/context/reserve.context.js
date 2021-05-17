import React from 'react';
import reserveService from '../services/reserve.service';
import Spinner from '../components/General/Spinner/Spinner';

const { Consumer, Provider } = React.createContext();

class ReserveProvider extends React.Component {
    state = {
        isLoggedIn: false,
        isLoading: true,
        user: null
    }

    reserveService = new reserveService();

    async componentDidMount(){
        try {
        const result = await this.userService.isLoggedIn();
        console.log(result)
        if (result) {
            this.setState({ isLoggedIn: true, isLoading: false, user: result.data})
        }
        } catch(err){
        this.setState({ isLoggedIn: false, isLoading: false, user: null})
        }
    }

    // CreateReserve = async (data) => {
    //     try {
    //         const response = await 
    //     }
    // }

}