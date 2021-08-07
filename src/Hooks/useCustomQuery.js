import { useSnackbar } from 'notistack';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';

import { SIGN_OUT_SUCCESS } from '../Consistent/consistent';
import { useUserDispatch } from '../Context/UserContext';

export function useCustomQuery(keyApi, apiCall, other) {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const userDispatch = useUserDispatch();
  const query = useQuery(keyApi, apiCall, {
    ...other,
    onError: (error) => {
      if (error.response?.status === 401) {
        userDispatch({ type: SIGN_OUT_SUCCESS });
        history.push("/");
      }
      enqueueSnackbar(error.response?.statusText, { variant: "error" });
      if (error.response?.status === 404) {
        history.push("/");
      }
    },
  });

  return query;
}
