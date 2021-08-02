import { useSnackbar } from "notistack";
import { useMutation } from "react-query";

export function useCustomMutation(apiCall, callbackSuccess) {
  const { enqueueSnackbar } = useSnackbar();
  const mutation = useMutation(apiCall, {
    onSuccess: callbackSuccess,
  });
  if (mutation.isError) {
    enqueueSnackbar(mutation.error?.response?.data, { variant: "error" });
  }

  return mutation;
}
