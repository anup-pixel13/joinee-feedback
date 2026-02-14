import axios from "axios";

const URL_Base1 = "http://localhost:8080/api/contacts";

export const saveContact = (contact) => axios.post(URL_Base1, contact) 

export const listContact = () => {return axios.get(URL_Base1);}

export const getContactById = (id) => axios.get(URL_Base1 + '/' + id);