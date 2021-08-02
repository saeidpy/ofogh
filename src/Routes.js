import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CrudAdComponent from "./Components/CrudAd/CrudAdComponent";
import LoginComponent from "./Components/Login/LoginComponent";
import MainComponent from "./Components/Main/MainComponent";
import SignUpComponent from "./Components/SignUp/SignUpComponent";
import route from "./Consistent/route";
import PrivateRoute from "./Middleware/PrivateRoute";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={route.signUp}>
          <SignUpComponent />
        </Route>
        <Route path={route.signIn}>
          <LoginComponent />
        </Route>
        <PrivateRoute path={route.createAd}>
          <CrudAdComponent mode="create" />
        </PrivateRoute>
        <PrivateRoute path={route.updateAd}>
          <CrudAdComponent mode="update" />
        </PrivateRoute>
        <PrivateRoute path="/">
          <MainComponent />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default Routes;
