import { cloneElement } from "react";
import { Redirect, Route } from "react-router-dom";
import { USER_AUTH } from "../Consistent/consistent";
import { getLocalStorage } from "../Utils/utils";

export default function PrivateRoute({
  children: Component,
  userExist,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        getLocalStorage(USER_AUTH) || userExist ? (
          cloneElement(Component, { ...props })
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );
}
