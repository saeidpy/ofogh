import apiMiddleware from "./apiMiddleware";

const loginApi = async (body) => {
  const { data } = await apiMiddleware({ method: "post", url: "/login", body });
  return data;
};
const signupApi = async (body) => {
  const { data } = await apiMiddleware({
    method: "post",
    url: "/signup",
    body,
  });
  return data;
};

export { loginApi, signupApi };
