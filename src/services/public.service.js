import axios from "axios";

class PublicService {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5000/api/public",
      withCredentials: true,
    });
  }

  showServices = () => this.instance.get("/services");

  showServiceDetail = (id) => this.instance.get(`/service/${id}`);
}

const PublicService = new PublicService();

export default PublicService;
