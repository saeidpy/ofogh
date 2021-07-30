import { useSnackbar } from "notistack";
import { useMutation } from "react-query";

export function useCustomMutation(apiCall, callbackSuccess) {
  const { enqueueSnackbar } = useSnackbar();
  const mutation = useMutation(apiCall, {
    onSuccess: callbackSuccess,
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });

  return mutation;
}
