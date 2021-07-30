import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EntryComponent from "./Components/Entry/EntryComponent";
import LoginComponent from "./Components/Login/LoginComponent";
import SignUpComponent from "./Components/SignUp/SignUpComponent";
import AdCardComponent from "./Components/AdCard/AdCardComponent";
import route from "./Consistent/route";
import { getLocalStorage } from "./Utils/utils";
import { USER_AUTH } from "./Consistent/consistent";
import HeaderComponent from "./Components/Header/HeaderComponent";
import MainComponent from "./Components/Main/MainComponent";

function Routes() {
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
    <Router>
      <Switch>
        <Route path={route.signUp}>
          <SignUpComponent />
        </Route>
        <Route path={route.signIn}>
          <LoginComponent />
        </Route>
        <Route path="/">
          {userExist?.accessToken ? <MainComponent /> : <EntryComponent />}
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
