import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import EntryComponent from './Components/Entry/EntryComponent';
import LoginComponent from './Components/Login/LoginComponent';
import SignUpComponent from './Components/SignUp/SignUpComponent';
import route from './Consistent/route';

function Routes() {
  const [userExist, setUserExist] = useState({});
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
          {userExist?.accessToken ? <div>hello world</div> : <EntryComponent />}
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
