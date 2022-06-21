import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "./apiEndPoint";

const customAxios = axios.create({
  baseURL: BASE_URL,
});

const forceLogout = () => {
  toast.error("Session Expired. Kindly login again.");
  localStorage.clear();
  window.location.href = "/";
};

// Add a response interceptor
customAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error.response.status === 401 &&
      error.response.data.msg === "INVALID_TOKEN"
    ) {
      forceLogout();
    }

    return Promise.reject(error);
  }
);

export default customAxios;
