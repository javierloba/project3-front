import axios from "axios";

class UserService {
    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:5000/api/user",
        withCredentials: true,
        });
    }

    showUsers = () => this.instance.get("/clients");
    showUserDetail = (id) => this.instance.get(`/client/${id}`);
    editOneUser = (id, data) => this.instance.put(`/editClient/${id}`, data);
   

}

export default UserService;