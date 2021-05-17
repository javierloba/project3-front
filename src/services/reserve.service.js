import axios from "axios";

class ReserveService {
    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:5000/api/auth",
        withCredentials: true,
        });
    }

    createReserve = (data) => this.instance.post(`/create-reserve`, data);
    showReserves = () => this.instance.get("/reserves");
    showReserveDetail = (id) => this.instance.get(`/reserve/${id}`);
    editReserve = (id, data) => this.instance.put(`/reserve/${id}`, data);
    deleteReserve = (id) => this.instance.delete(`/reserve/${id}/delete`);

}

export default ReserveService;