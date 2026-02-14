import axios from "axios";
import API_BASE_URL from "../config";

const URL_Base1 = `${API_BASE_URL}/contacts`;

export const saveContact = (contact) => axios.post(URL_Base1, contact);

export const listContact = () => {
  return axios.get(URL_Base1);
};

export const getContactById = (id) => axios.get(URL_Base1 + '/' + id);