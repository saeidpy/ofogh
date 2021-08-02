import { useSnackbar } from "notistack";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";

export function useCustomQuery(keyApi, apiCall, other) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const query = useQuery(keyApi, apiCall, {
    ...other,
    onError: (error) => {
      enqueueSnackbar(error.response.statusText, { variant: "error" });
      if (error.response.status === 404) {
        history.push("/");
      }
    },
  });

  return query;
}
