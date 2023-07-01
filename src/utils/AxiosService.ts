import axios from "axios";

const axiosClient: any = axios.create();
// axiosClient.defaults.baseURL = "https://weatherapi-com.p.rapidapi.com/";

axiosClient.defaults.headers = {
  "X-RapidAPI-Key": "8160df12c9mshca8022235c6c733p1d665ajsnd3f9120fe1ef",
  "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  "Content-Type": "application/json",
  Accept: "application/json",
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export function userLogIn(payload: any) {
  return axiosClient
    .post("http://localhost:3000/login", payload)
    .then((response: any) => response);
}

export function userRegister(payload: any) {
  return axiosClient
    .post("http://localhost:3000/register", payload)
    .then((response: any) => response);
}
export function getRequest(URL: string, QUERY: any) {
  const options = {
    params: QUERY,
  };
  return axiosClient.get(`/${URL}`, options).then((response: any) => response);
}

export function postRequest(URL: string, payload: any) {
  return axiosClient.post(`/${URL}`, payload).then((response: any) => response);
}

export function patchRequest(URL: string, payload: any) {
  return axiosClient
    .patch(`/${URL}`, payload)
    .then((response: any) => response);
}

export function deleteRequest(URL: string) {
  return axiosClient.delete(`/${URL}`).then((response: any) => response);
}
