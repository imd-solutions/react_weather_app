import axios from "axios";

const axiosClient: any = axios.create();

axiosClient.defaults.headers = {
  "X-RapidAPI-Key": "8160df12c9mshca8022235c6c733p1d665ajsnd3f9120fe1ef",
  "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export default axiosClient;
