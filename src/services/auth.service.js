import axios from "axios";

class AuthService {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5000/api/auth",
      withCredentials: true,
    });
  }

  createUser = (data) => this.instance.post("/createUser", data);
  createWorker = (data) => this.instance.post("/createWorker", data);
  isLoggedIn = () => this.instance.get("/loggedin");
  login = (data) => this.instance.post("/login", data);
  logout = () => this.instance.get("/logout");
}

export default AuthService;
