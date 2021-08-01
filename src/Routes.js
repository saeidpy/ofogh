import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CrudAdComponent from './Components/CrudAd/CrudAdComponent';
import EntryComponent from './Components/Entry/EntryComponent';
import LoginComponent from './Components/Login/LoginComponent';
import MainComponent from './Components/Main/MainComponent';
import SignUpComponent from './Components/SignUp/SignUpComponent';
import { USER_AUTH } from './Consistent/consistent';
import route from './Consistent/route';
import { getLocalStorage } from './Utils/utils';

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
        <Route path="/ad/create">
          <CrudAdComponent mode="create" />
        </Route>
        <Route path="/ad/:id">
          <CrudAdComponent mode="update" />
        </Route>

        <Route path="/">
          {userExist?.accessToken ? (
            <MainComponent />
          ) : (
            <EntryComponent />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
