import { postRequest, getRequest } from "./ApiService";

export function addNewLocation(location: string) {
  let userId = localStorage.getItem("authUser")
    ? JSON.parse(localStorage.getItem("authUser") || "{}").user.id
    : null;

  const payload = {
    user_id: userId,
    title: location,
  };
  return postRequest("locations", payload).then((response: any) => response);
}

export function getLocations() {
  let userId = localStorage.getItem("authUser")
    ? JSON.parse(localStorage.getItem("authUser") || "{}").user.id
    : null;

  return getRequest(`locations?user_id=${userId}`).then(
    (response: any) => response
  );
}

export function getLocation(location: string) {
  let userId = localStorage.getItem("authUser")
    ? JSON.parse(localStorage.getItem("authUser") || "{}").user.id
    : null;

  return getRequest(`locations?user_id=${userId}&title=${location}`).then(
    (response: any) => response
  );
}
