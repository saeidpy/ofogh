import { useSnackbar } from "notistack";
import { useQuery } from "react-query";

export function useCustomQuery(keyApi, apiCall, other) {
  const { enqueueSnackbar } = useSnackbar();
  const query = useQuery(keyApi, apiCall, other);
  if (query.error) {
    enqueueSnackbar(query.error, { variant: "error" });
  }

  return query;
}
