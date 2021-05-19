import React, { Component } from "react";
import { withAuth } from "../../../context/auth.context";
import { withWorker } from "../../../context/worker.context";
import WorkerItem from "../WorkerItem/WorkerItem";
import workerService from "../../../services/worker.service";
import AdminNavbar from "../../../components/General/Navbar/AdminNavbar";

class WorkerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [],
    };
    this.workerService = new workerService();
  }

  deleteWorker = async (workerId) => {
    await this.props.deleteWorker(workerId);
  };

  displayWorkers() {
    if (this.props.workerList) {
      return this.props.workerList.map((worker) => {
        return (
          <div>
            <WorkerItem
              key={worker._id}
              {...worker}
              deleteWorker={this.deleteWorker}
            />
          </div>
        );
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <AdminNavbar />
        <div>{this.displayWorkers()}</div>
      </div>
    );
  }
}

export default withAuth(withWorker(WorkerList));
