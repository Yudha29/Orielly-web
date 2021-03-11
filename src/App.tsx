import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import './App.css';
import './style/main.output.css';
import browserHistory from "./browserHistory";
import SignIn from "./auth/page/SignIn";
import SignUp from "./auth/page/SignUp";
import ForgotPassword from "./auth/page/ForgotPassword";
import ResetPassword from "./auth/page/ResetPassword";

function App() {
  return (
      <Router history={browserHistory}>
        <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/reset" component={ResetPassword} />
        </Switch>
      </Router>
  );
}

export default App;
