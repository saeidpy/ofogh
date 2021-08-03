import React from "react";

import {
  LOGIN_SUCCESS,
  SIGN_OUT_SUCCESS,
  USER_AUTH,
} from "../Consistent/consistent";
import {
  getLocalStorage,
  isEmptyObject,
  setLocalStorage,
} from "../Utils/utils";

export const UserStateContext = React.createContext();
export const UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      setLocalStorage(USER_AUTH, action.payload);
      return { ...state, isAuthenticated: true };
    case SIGN_OUT_SUCCESS:
      localStorage.removeItem(USER_AUTH);
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !isEmptyObject(getLocalStorage(USER_AUTH)),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
};

export const useUserDispatch = () => {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;
