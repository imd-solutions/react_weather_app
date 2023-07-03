import axiosClient from "../utils/Axios";

const apiUrl = "http://localhost:3000/";

export function getRequest(
  URL: string,
  QUERY: any | null = "",
  baseUlr: string | null = ""
) {
  axiosClient.defaults.baseURL = baseUlr ? baseUlr : apiUrl;
  const options = {
    params: QUERY,
  };
  return axiosClient.get(`/${URL}`, options).then((response: any) => response);
}

export function postRequest(
  URL: string,
  payload: any,
  baseUlr: string | null = ""
) {
  axiosClient.defaults.baseURL = baseUlr ? baseUlr : apiUrl;
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
