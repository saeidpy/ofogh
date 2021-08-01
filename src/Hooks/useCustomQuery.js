import { useSnackbar } from "notistack";
import { useQuery } from "react-query";

export function useCustomQuery(...rest) {
  const { enqueueSnackbar } = useSnackbar();
  const query = useQuery(...rest);
  if (query.error) {
    enqueueSnackbar(query.error, { variant: "error" });
  }

  return query;
}
