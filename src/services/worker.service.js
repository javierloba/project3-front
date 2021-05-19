import axios from "axios";

class WorkerService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/worker`,
        withCredentials: true,
        });
    }

    
    showWorkers = () => this.instance.get("/workers");
    showWorkerDetail = (id) => this.instance.get(`/worker/${id}`);
    editWorker = (id, data) => this.instance.put(`/editWorker/${id}`, data);
    deleteWorker = (id) => this.instance.delete(`/deleteWorker/${id}`);

}

export default WorkerService;