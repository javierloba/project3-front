import axios from "axios";

class ReserveService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/reserve`,
        withCredentials: true,
        });
    }

    createReserve = (data) => this.instance.post(`/create-reserve`, data);
    showReserves = () => this.instance.get("/reserves");
    showReserveDetail = (id) => this.instance.get(`reserve/${id}`);
    editReserve = (id, data) => this.instance.put(`/reserve/${id}`, data);
    deleteReserve = (id) => this.instance.delete(`/reserve/${id}/delete`);

}

export default ReserveService;