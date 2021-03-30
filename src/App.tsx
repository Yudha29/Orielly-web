import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
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
import Search from "./common/page/search/Search";
import Bag from "./bag/page/Bag";
import ScrollToTop from "./common/util/ScrollToTop";
import ProductDetail from "./product/page/productDetail/ProductDetail";
import PrivacyPolicy from "./common/page/PrivacyPolicy";
import About from "./common/page/About";
import Contact from "./common/page/Contact";
import TermOfUse from "./common/page/TermOfUse";

function App() {
  return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <ScrollToTop />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/search" component={Search} />
                    <Route path="/bag" component={Bag} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/forgot" component={ForgotPassword} />
                    <Route path="/reset" component={ResetPassword} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/policies" component={PrivacyPolicy} />
                    <Route path="/terms" component={TermOfUse} />
                    <Route path="/about" component={About} />
                    <Route path="/:id" component={ProductDetail} />
                </Switch>
            </Router>
        </Provider>
  );
}

export default App;
