import React, { Component } from "react";
import { withAuth } from "../../../context/auth.context";
import { withWorker } from "../../../context/worker.context";
import WorkerItem from "../WorkerItem/WorkerItem";
import { Link } from 'react-router-dom';

class WorkerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [],
    };
  }

  displayWorkers() {
    if (this.props.workerList) {
      return this.props.workerList.map((worker) => {
        return (

          <div>
          <Link to={`/home/worker/editarTrabajador/${worker._id}`} className="list-group-item list-group-item-action">
            <WorkerItem key={worker._id} {...worker} />
          </Link>
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
