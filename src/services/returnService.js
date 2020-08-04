import http from "./httpServices";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/returns";

function returnUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function saveReturn(rental) {
  if (rental._id) {
    const body = { ...rental };
    delete rental._id;
    return http.put(returnUrl(rental._id), body);
  }

  return http.post(apiEndPoint, rental);
}
