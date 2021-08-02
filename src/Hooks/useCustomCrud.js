import { useSnackbar } from "notistack";
import { useQueryClient } from "react-query";

import { createAdApi, deleteAdApi, updateAdApi } from "../Api/Ad";
import { GET_ADS } from "../Consistent/consistent";
import fa from "../Consistent/fa";
import { useCustomMutation } from "./useCustomMutation";

export const useCustomCrud = (type, callback) => {
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
      queryClient.invalidateQueries(GET_ADS);
    }
  };
  const mutate = useCustomMutation(api, customCallback);

  return mutate;
};
