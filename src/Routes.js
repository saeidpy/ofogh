import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EntryComponent from "./Components/Entry/EntryComponent";
import LoginComponent from "./Components/Login/LoginComponent";
import SignUpComponent from "./Components/SignUp/SignUpComponent";
import { USER_AUTH } from "./Consistent/consistent";
import route from "./Consistent/route";
import { getLocalStorage } from "./Utils/utils";

function Routes() {
  const [userExist, setUserExist] = useState();
  useEffect(() => {
    const getUser = () => {
      setUserExist(getLocalStorage(USER_AUTH));
    };
    window.addEventListener("storage", getUser);
    return () => {
      window.removeEventListener("storage", getUser);
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
          {userExist?.accessToken ? <div>hello world</div> : <EntryComponent />}
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
