import React from 'react';
import serviceService from '../services/service.service';

const { Consumer, Provider } = React.createContext();

class ServiceProvider extends React.Component {
    state = {
        serviceDetail: {},
        serviceList: [],
        service: null
    }

    serviceService = new serviceService();

    async componentDidMount(){
        try {
            const result = await this.serviceService.showServices();
            const result2 = await this.serviceService.showServiceDetail();
            if (result) {
                this.setState({ isLoggedIn: true, isLoading: false, serviceList: result.data})
            }
            if (result2) {
                this.setState({ isLoggedIn: true, isLoading: false, serviceDetail: result.data})
            }
        } catch(err){
            this.setState({ isLoggedIn: false, isLoading: false, service: null})
        }
    }

    createService = async (data) => {
      try {
        const response = await this.createService(data);
        if(response) {
          this.setState({...this.state, service: response.data})
        }
      } catch (error) {
        this.setState({ ...this.state })
      }
    }

    showServices = async () => {
        try {
            const response = await this.showServices();
            if(response) {
                this.setState({...this.state, serviceList: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    showServiceDetail = async (id) => {
        try {
            const response = await this.showServiceDetail(id);
            if(response) {
                this.setState({...this.state, serviceDetail: response.data})
            }
        } catch(error) {
            console.error(error)
        }
    }

    editService = async (id, data) => {
        try {
            const response = await this.editService(id, data);
            if(response) {
                this.setState({...this.state, user: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    deleteService = async (id) => {
        try {
            const response = await this.deleteService(id);
            if(response) {
                this.setState({...this.state, user: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const { serviceDetail, serviceList } = this.state;

        return(
        <Provider value={{ serviceDetail, serviceList, createService: this.createService, showService: this.showServices, showServiceDetail: this.showServiceDetail, editService: this.editService, deleteService: this.deleteService }}  >
            {this.props.children}
        </Provider>
        )
    }
}

const withService = (WrappedComponent) => {

    return function (props) {
        return(
        <Consumer>
            { (value) => {
            const {  serviceDetail, serviceList, createService, showService, showServiceDetail, editService, deleteService } = value;

            return (
                <WrappedComponent
                    serviceDetail={serviceDetail}
                    serviceList={serviceList}
                    createService={createService}
                    showServices={showService}
                    showServiceDetail={showServiceDetail}
                    editService={editService}
                    deleteService={deleteService}
                {...props}
                />
            )

            } }
        </Consumer>
        )
    }
}

export { ServiceProvider, withService }