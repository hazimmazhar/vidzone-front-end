import http from "./httpServices";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/customers";

function customerUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getCustomers() {
  return http.get(apiEndPoint);
}

export function getCustomer(customerId) {
  return http.get(customerUrl(customerId));
}

export function saveCustomer(customer) {
  if (customer._id) {
    const body = { ...customer };
    delete body._id;
    return http.put(customerUrl(customer._id), body);
  }

  return http.post(apiEndPoint, customer);
}

export function deleteCustomer(customerId) {
  return http.delete(customerUrl(customerId));
}
