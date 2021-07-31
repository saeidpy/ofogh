import { useSnackbar } from "notistack";
import { useQueryClient } from "react-query";

import { createAdApi, deleteAdApi, readAdApi, updateAdApi } from "../Api/Ad";
import fa from "../Consistent/fa";
import { useCustomMutation } from "./useCustomMutation";
import { useCustomQuery } from "./useCustomQuery";

export const useCustomCrud = (type, callback, id) => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  let api;
  let message;
  switch (type) {
    case "create":
      api = createAdApi;
      message = fa.successRequest.create;
      break;
    case "update":
      api = updateAdApi;
      message = fa.successRequest.update;

      break;
    case "read":
      api = readAdApi;
      break;
    case "delete":
      api = deleteAdApi;
      message = fa.successRequest.delete;

      break;
    default:
      api = createAdApi;
      break;
  }
  const customCallback = () => {
    callback();
    enqueueSnackbar(message, { variant: "success" });
    if (type === "create" || type === "update") {
      queryClient.invalidateQueries("getAds");
    }
  };
  const mutate = useCustomMutation(api, customCallback);
  const query = useCustomQuery("getAd", () => api(id), {
    enabled: !!id.id,
  });

  return type === "react" ? query : mutate;
};
