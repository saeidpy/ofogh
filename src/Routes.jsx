import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EntryComponent from "./Components/Entry/EntryComponent";
import LoginComponent from "./Components/Login/LoginComponent";
import SignUpComponent from "./Components/SignUp/SignUpComponent";
import route from "./Consistent/route";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={"/" + route.signUp}>
          <SignUpComponent />
        </Route>{" "}
        <Route path={"/" + route.signIn}>
          <LoginComponent />
        </Route>
        <Route path="/">
          <EntryComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
