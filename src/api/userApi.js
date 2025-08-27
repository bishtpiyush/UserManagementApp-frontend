import axios from "axios";

const API_URL = "http://127.0.0.1:8080/api/users";

export const getUsers = async () => {
  return axios.get(API_URL);
};

export const createUser = async (user) => {
  return axios.post(API_URL, user);
};
