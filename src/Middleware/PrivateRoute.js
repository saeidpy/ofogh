import { cloneElement, useEffect, useState } from "react";
import { Route } from "react-router-dom";

import EntryComponent from "../Components/Entry/EntryComponent";
import { USER_AUTH } from "../Consistent/consistent";
import { getLocalStorage, isEmptyObject } from "../Utils/utils";

export default function PrivateRoute({ children: Component, ...rest }) {
  const [userExist, setUserExist] = useState(getLocalStorage(USER_AUTH));
  useEffect(() => {
    const getUser = (data) => {
      setUserExist(data.value);
    };
    document.addEventListener("authInserted", getUser);
    return () => {
      document.removeEventListener("authInserted", getUser);
    };
  }, []);
  return (
    <Route {...rest}>
      {!isEmptyObject(userExist) ? cloneElement(Component) : <EntryComponent />}
    </Route>
  );
}
