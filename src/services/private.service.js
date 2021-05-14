import axios from "axios";

class PrivateService {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5000/api/private",
      withCredentials: true,
    });
  }

  showClients = () => this.instance.get("/clients");

  showClientDetail = (id) => this.instance.get(`/client/${id}`);

  showWorkers = () => this.instance.get("/workers");

  showWorkerDetail = (id) => this.instance.get(`/worker/${id}`);

  createService = (data) => this.instance.post(`/createService`, data);

  createReserve = (data) => this.instance.post(`/create-reserve`, data);

  editService = (id, data) => this.instance.put(`/services/${id}`, data);

  editReserve = (id, data) => this.instance.put(`/reserve/${id}`, data);

  deleteService = (id) => this.instance.delete(`/services/${id}/delete`);

  deleteReserve = (id) => this.instance.delete(`/reserve/${id}/delete`);

  showReserves = () => this.instance.get("/reserves");

  showReserveDetail = (id) => this.instance.get(`/reserve/${id}`);
}

const PrivateService = new PrivateService();

export default PrivateService;

