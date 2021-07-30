import axios from "axios";
import { USER_AUTH } from "../Consistent/consistent";
import { getLocalStorage } from "../Utils/utils";

const apiMiddleware = async ({ method, url, body: data, withAuth = false }) => {
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_API;
  if (withAuth) {
    axios.defaults.headers.common = {
      Authorization: `bearer ${getLocalStorage(USER_AUTH)?.accessToken}`,
    };
  }
  return await axios({
    method,
    url,
    data,
  });
};

export default apiMiddleware;
