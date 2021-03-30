import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import './style/main.output.css';
import browserHistory from "./browserHistory";
import {store} from "./redux/store";

function App() {
  return (
        <Provider store={store}>
            <Router history={browserHistory}>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path="/" component={React.lazy(() => import('./common/page/home/Home'))} exact />
                  <Route path="/search" component={React.lazy(() => import('./common/page/search/Search'))} />
                  <Route path="/bag" component={React.lazy(() => import('./bag/page/Bag'))} />
                  <Route path="/signin" component={React.lazy(() => import('./auth/page/SignIn'))} />
                  <Route path="/signup" component={React.lazy(() => import('./auth/page/SignUp'))} />
                  <Route path="/forgot" component={React.lazy(() => import('./auth/page/ForgotPassword'))} />
                  <Route path="/reset" component={React.lazy(() => import('./auth/page/ResetPassword'))} />
                  <Route path="/contact" component={React.lazy(() => import('./common/page/Contact'))} />
                  <Route path="/policies" component={React.lazy(() => import('./common/page/PrivacyPolicy'))} />
                  <Route path="/terms" component={React.lazy(() => import('./common/page/TermOfUse'))} />
                  <Route path="/about" component={React.lazy(() => import('./common/page/About'))} />
                  <Route path="/:id" component={React.lazy(() => import('./product/page/productDetail/ProductDetail'))} />
                </Switch>
              </React.Suspense>
            </Router>
        </Provider>
  );
}

export default App;
