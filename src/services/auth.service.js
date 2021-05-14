import axios from "axios";

class AuthService {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5000/api/auth",
      withCredentials: true,
    });
  }

  createWorker = (data) => this.instance.post("/createWorker", data);

  createUser = (data) => this.instance.post("/createUser", data);

  editUser = (id, data) => this.instance.put(`/editClient/${id}`, data);

  editWorker = (id, data) => this.instance.put(`/editWorker/${id}`, data);

  deleteUser = (id) => this.instance.delete(`/deleteClient/${id}`);

  deleteWorker = (id) => this.instance.delete(`/delete/${id}`);

  isLoggedIn = () => this.instance.get("/loggedin");

  logout = () => this.instance.get("/loggedin");
}

const authService = new AuthService();

export default authService;

// Service is a set of methods abstracted and placed into a class, out of which we create one instance.
// In the above case, all axios request calls are abstracted into methods.
