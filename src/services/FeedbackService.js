import axios from "axios";
import API_BASE_URL from "../config";

const URL_Base = `${API_BASE_URL}/feedbacks`;
const URL_Login = `${API_BASE_URL}/admins/login`;

export const listFeedback = () => {
  return axios.get(URL_Base);
};

export const createFeedback = (feedback) => axios.post(URL_Base, feedback);

export const getFeedbackById = (id) => axios.get(URL_Base + '/' + id);

export const checkLogin = (credentials) => 
  axios.post(URL_Login, credentials, {
    headers: { "Content-Type": "application/json" }
  });

/*export const updateEmployee = (id, employee) => axios.put(URL_Base + '/' + id, employee);

export const deleteEmployee = (id) => axios.delete(URL_Base + '/' + id);*/