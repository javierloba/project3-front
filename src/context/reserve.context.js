import React from 'react';
import reserveService from '../services/reserve.service';

const { Consumer, Provider } = React.createContext();

class ReserveProvider extends React.Component {
    state = {
        reserveDetail: {},
        reserveList: [],
        reserve: null
    }

    reserveService = new reserveService();

    async componentDidMount(){
        try {
            const result = await this.reserveService.showReserves();
            const result2 = await this.reserveService.showReserveDetail();
            if (result) {
                this.setState({ isLoggedIn: true, isLoading: false, reserveList: result.data})
            }
            if (result2) {
                this.setState({ isLoggedIn: true, isLoading: false, reserveDetail: result.data})
            }
        } catch(err){
            this.setState({ isLoggedIn: false, isLoading: false, reserve: null})
        }
    }

    createReserve = async (data) => {
      try {
        const response = await this.reserveService.createReserve(data);
        if(response) {
          this.setState({...this.state, reserve: response.data})
        }
      } catch (error) {
        this.setState({ ...this.state })
      }
    }

    showReserves = async () => {
        try {
            const response = await this.reserveService.showReserves();
            if(response) {
                this.setState({...this.state, reserveList: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    showReserveDetail = async (id) => {
        try {
            const response = await this.reserveService.showReserveDetail(id);
            if(response) {
                this.setState({...this.state, reserveDetail: response.data})
            }
        } catch(error) {
            console.error(error)
        }
    }

    editReserve = async (id, data) => {
        try {
            const response = await this.reserveService.editReserve(id, data);
            if(response) {
                this.setState({...this.state, reserve: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    deleteReserve = async (id) => {
        try {
            const response = await this.reserveService.deleteReserve(id);
            if(response) {
                this.setState({...this.state, reserve: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const { reserveDetail, reserveList, reserve } = this.state;

        return(
        <Provider value={{ reserveDetail, reserveList, reserve, createReserve: this.createReserve, showReserve: this.showReserves, showReserveDetail: this.showReserveDetail, editReserve: this.editReserve, deleteReserve: this.deleteReserve }}  >
            {this.props.children}
        </Provider>
        )
    }
}

const withReserve = (WrappedComponent) => {

    return function (props) {
        return(
        <Consumer>
            { (value) => {
            const {  reserveDetail, reserveList, reserve, createReserve, showReserve, showReserveDetail, editReserve, deleteReserve } = value;

            return (
                <WrappedComponent
                    reserveDetail={reserveDetail}
                    reserveList={reserveList}
                    reserve={reserve}
                    createReserve={createReserve}
                    showReserves={showReserve}
                    showReserveDetail={showReserveDetail}
                    editReserve={editReserve}
                    deleteReserve={deleteReserve}
                {...props}
                />
            )

            } }
        </Consumer>
        )
    }
}

export { ReserveProvider, withReserve }