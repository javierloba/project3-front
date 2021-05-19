import axios from "axios";

class UserService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`,
        withCredentials: true,
        });
    }

    showUsers = () => this.instance.get("/clients");
    showUserDetail = (id) => this.instance.get(`/client/${id}`);
    editOneUser = (id, data) => this.instance.put(`/editClient/${id}`, data);
    deleteUser = (id) => this.instance.delete(`/deleteClient/${id}`);

}

export default UserService;