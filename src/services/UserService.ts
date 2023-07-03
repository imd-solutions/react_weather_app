import { postRequest } from "./ApiService";

export function userLogIn(payload: any) {
  return postRequest("login", payload).then((response: any) => response);
}

export function userRegister(payload: any) {
  return postRequest("register", payload).then((response: any) => response);
}
