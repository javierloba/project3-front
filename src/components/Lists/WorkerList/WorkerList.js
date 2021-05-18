import React, { Component } from "react";
import { withAuth } from "../../../context/auth.context";
import { withWorker } from "../../../context/worker.context";
import WorkerItem from "../WorkerItem/WorkerItem";
import workerService from "../../../services/worker.service";
import { Link } from 'react-router-dom';

class WorkerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [],
    };
    this.workerService = new workerService();
  }

 deleteWorker = async (workerId) => {
   console.log(workerId)
  await this.props.deleteWorker(workerId)
 }
  

  displayWorkers() {
    if (this.props.workerList) {
      return this.props.workerList.map((worker) => {
        return (

          <div>
            <WorkerItem key={worker._id} {...worker} deleteWorker={this.deleteWorker} />
          </div>
        );
      });
    } else {
      return null;
    }
  }

  render() {
    return <div>{this.displayWorkers()}</div>;
  }
}

export default withAuth(withWorker(WorkerList));
