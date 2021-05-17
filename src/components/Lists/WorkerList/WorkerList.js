import React, { Component } from "react";
import { withAuth } from "../../../context/auth.context";
import { withWorker } from "../../../context/worker.context";
import WorkerItem from "../WorkerItem/WorkerItem";

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
          <WorkerItem
            refreshState={() => this.refreshState()}
            key={worker._id}
            {...worker}
          />
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
