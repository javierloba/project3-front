import axios from "axios";

class ServiceService {
    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:5000/api/service",
        withCredentials: true,
        });
    }

    createService = (data) => this.instance.post(`/createService`, data);
    showServices = () => this.instance.get("/services");
    showServiceDetail = (id) => this.instance.get(`/${id}`);
    editService = (id, data) => this.instance.put(`/services/${id}`, data);
    deleteService = (id) => this.instance.delete(`/services/${id}/delete`);

}

export default ServiceService;