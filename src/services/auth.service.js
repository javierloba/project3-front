import axios from "axios";

class AuthService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true,
    });
  }

  createUser = (data) => this.instance.post("/createUser", data);
  createWorker = (data) => this.instance.post("/createWorker", data);
  isLoggedIn = () => this.instance.get("/loggedin");
  login = (data) => this.instance.post("/login", data);
  logout = () => this.instance.post("/logout");
  deleteWorker = (id) => this.instance.delete(`/deleteWorker/${id}`);
  
}

export default AuthService;
