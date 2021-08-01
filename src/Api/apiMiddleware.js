import axios from "axios";
import { USER_AUTH } from "../Consistent/consistent";
import { getLocalStorage } from "../Utils/utils";

const apiMiddleware = async ({ method, url, body: data, withAuth = false }) => {
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_API;
  if (withAuth) {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${getLocalStorage(USER_AUTH)?.accessToken}`,
    };
  }

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        localStorage.removeItem(USER_AUTH);
        window.location.href = "/";
      }
      return Promise.reject(error);
    }
  );

  const response = await axios({
    method,
    url,
    data,
  });

  return response;
};

export default apiMiddleware;
