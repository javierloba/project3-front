import React, { Component } from 'react'
import PrivateService from "../../services/private.service"
import WorkerItem from "../WorkerItem/WorkerItem"

export default class WorkerList extends Component {
    constructor(props){
        super(props);
        this.state = {
            workers: []
        }
        this.privateService = new PrivateService();
    }
    
    refreshState() {
        this.privateService.showWorkers()
        .then(response => {
            this.setState({ workers : response.data })
        })
        .catch(err => console.error(err))
    }

    componentDidMount(){
        this.refreshState();
    }

    displayWorkers(){
        const { workers } = this.state;
        return workers.map(worker => {
            return (
                <WorkerItem refreshState={() => this.refreshState()} key={worker.id} {...worker} />
            )
        })
    }
    render() {
        return (
            <div>
                { this.displayWorkers() }
            </div>
        )
    }
}
