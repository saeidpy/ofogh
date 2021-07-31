import { USER_AUTH } from "../Consistent/consistent";
import { getLocalStorage } from "../Utils/utils";
import apiMiddleware from "./apiMiddleware";

const createAdApi = async ({ body }) => {
  const { data } = await apiMiddleware({
    method: "POST",
    url: "/ads",
    body: { ...body, userId: getLocalStorage(USER_AUTH)?.user.id },
    withAuth: true,
  });
  return data;
};

const readAdApi = async ({ id }) => {
  const { data } = await apiMiddleware({
    method: "GET",
    url: "/ads/" + id,
    withAuth: true,
  });
  return data;
};

const readAllAdApi = async () => {
  const { data } = await apiMiddleware({
    method: "GET",
    url: "/ads",
    withAuth: true,
  });
  return data;
};

const updateAdApi = async ({ body, id }) => {
  const { data } = await apiMiddleware({
    method: "PUT",
    url: "/ads/" + id,
    body: { ...body, userId: getLocalStorage(USER_AUTH)?.user.id },
    withAuth: true,
  });
  return data;
};

const deleteAdApi = async ({ id }) => {
  const { data } = await apiMiddleware({
    method: "DELETE",
    url: "/ads/" + id,
    withAuth: true,
  });
  return data;
};

export { createAdApi, readAdApi, updateAdApi, deleteAdApi, readAllAdApi };
