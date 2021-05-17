import React from 'react';
import workerService from '../services/worker.service';

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
            //const result2 = await this.workerService.showWorkerDetail();
            if (result) {
                this.setState({workerList: result.data})
            }
            // if (result2) {
            //     this.setState({workerDetail: result.data})
            // }
        } catch(err){
            this.setState({ isLoggedIn: false, isLoading: false, workerList: null})
        }
    }

    showWorkers = async (data) => {
        try {
            const response = await this.showWorkers(data);
            if(response) {
                this.setState({...this.state, workerList: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    showWorkerDetail = async (data) => {
        try {
            const response = await this.showWorkerDetail(data);
            if(response) {
                this.setState({...this.state, workerDetail: response.data})
            }
        } catch(error) {
            console.error(error)
        }
    }

    editWorker = async (data) => {
        try {
            const response = await this.editWorker(data);
            if(response) {
                this.setState({...this.state, user: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    deleteWorker = async (data) => {
        try {
            const response = await this.deleteWorker(data);
            if(response) {
                this.setState({...this.state, user: response.data})
            }
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const { workerDetail, workerList } = this.state;

        return(
        <Provider value={{ workerDetail, workerList, showWorkers: this.showWorkers, showWorkerDetail: this.showWorkerDetail, editWorker: this.editWorker, deleteWorker: this.deleteWorker }}  >
            {this.props.children}
        </Provider>
        )
    }
}

const withWorker = (WrappedComponent) => {

    return function (props) {
        return(
        <Consumer>
            { (value) => {
            const {  workerDetail, workerList, showWorkers, showWorkerDetail, editWorker, deleteWorker } = value;

            return (
                <WrappedComponent
                    workerDetail={workerDetail}
                    workerList={workerList}
                    showWorkers={showWorkers}
                    showWorkerDetail={showWorkerDetail}
                    editWorker={editWorker}
                    deleteWorker={deleteWorker}
                {...props}
                />
            )

            } }
        </Consumer>
        )
    }
}

export { WorkerProvider, withWorker }