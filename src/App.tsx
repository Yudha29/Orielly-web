import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import './style/main.output.css';
import browserHistory from "./browserHistory";
import SignIn from "./auth/page/SignIn";
import SignUp from "./auth/page/SignUp";
import ForgotPassword from "./auth/page/ForgotPassword";
import ResetPassword from "./auth/page/ResetPassword";
import Home from "./common/page/home/Home";
import {store} from "./redux/store";

function App() {
  return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/forgot" component={ForgotPassword} />
                    <Route path="/reset" component={ResetPassword} />
                </Switch>
            </Router>
        </Provider>
  );
}

export default App;
