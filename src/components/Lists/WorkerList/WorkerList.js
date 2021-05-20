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
      workerList: [],
    };
    this.workerService = new workerService();
  }

  async componentDidMount() {
    const result = await this.workerService.showWorkers();
            if (result) {
                this.setState({workerList: result.data})
            }
    this.forceUpdate()
  }

  deleteWorker = async (workerId) => {
    await this.props.deleteWorker(workerId);
  };

  displayWorkers() {
    if (this.state.workerList) {
      return this.state.workerList.map((worker) => {
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
