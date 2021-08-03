import { cloneElement } from "react";
import { Route } from "react-router-dom";

import EntryComponent from "../Components/Entry/EntryComponent";
import { useUserState } from "../Context/UserContext";

export default function PrivateRoute({ children: Component, ...rest }) {
  var { isAuthenticated } = useUserState();

  return (
    <Route {...rest}>
      {isAuthenticated ? cloneElement(Component) : <EntryComponent />}
    </Route>
  );
}
