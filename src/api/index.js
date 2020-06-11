import axios from "axios";
const BASE_URL = "http://localhost:5000";

const token = localStorage.getItem("tldr/token"),
  headers = {
    authorization: `Bearer ${token}`,
  };

export const register = (username, email, password) =>
  axios.post(BASE_URL + "/register", { username, email, password });
export const login = (username, password) =>
  axios.post(BASE_URL + "/login", { username, password });
export const fetch = () => {
  const config = {
    headers,
  };
  return axios.get(BASE_URL + "/users/me", config);
};
export const createPost = (folder, title, content) => {
  const body = {
    folder,
    title,
    content,
  };
  const config = {
    headers,
  };
  return axios.post(BASE_URL + "/posts", body, config);
};
export const createFolder = title => {
  const body = {
    title,
  };
  const config = {
    headers,
  };
  return axios.post(BASE_URL + "/folders", body, config);
};