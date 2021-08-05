import { useSnackbar } from "notistack";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";

import { SIGN_OUT_SUCCESS } from "../Consistent/consistent";
import { useUserDispatch } from "../Context/UserContext";

export function useCustomMutation(apiCall, callbackSuccess) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const userDispatch = useUserDispatch();
  const mutation = useMutation(apiCall, {
    retry: 1,
    onSuccess: callbackSuccess,
    onError: (error) => {
      if (error.response.status === 401) {
        userDispatch({ type: SIGN_OUT_SUCCESS });
        history.push("/");
      }
      enqueueSnackbar(error?.response?.data, { variant: "error" });
    },
  });

  return mutation;
}
