import axios from "axios";

class UserService {
    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:5000/api/auth",
        withCredentials: true,
        });
    }

    showUsers = () => this.instance.get("/users");
    showUserDetail = (id) => this.instance.get(`/user/${id}`);
    editUser = (id, data) => this.instance.put(`/editClient/${id}`, data);
    deleteUser = (id) => this.instance.delete(`/deleteClient/${id}`);

}

export default UserService;