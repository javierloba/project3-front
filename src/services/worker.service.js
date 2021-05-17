import axios from "axios";

class WorkerService {
    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:5000/api/worker",
        withCredentials: true,
        });
    }

    createWorker = (data) => this.instance.post("/createWorker", data);
    showWorkers = () => this.instance.get("/workers");
    showWorkerDetail = (id) => this.instance.get(`/worker/${id}`);
    editWorker = (id, data) => this.instance.put(`/editWorker/${id}`, data);
    deleteWorker = (id) => this.instance.delete(`/delete/${id}`);

}

export default WorkerService;