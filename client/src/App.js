import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalStyles } from './global.styles'

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { checkUserSession } from './redux/user/user.actions'


const HomePage = lazy(()=> import('./pages/homepage/homepage.component'))
const ShopPage = lazy(()=> import('./pages/shop/shop.component'))
const CheckoutPage = lazy(()=> import('./pages/checkout/checkout.componet'))
const SignInAndSignUpPage = lazy(()=> import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))


function App() {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div >
      <GlobalStyles/>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
            <Route exact path="/" component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser !== null ? (
                  <Redirect to='/' />
                ) : (
                    <SignInAndSignUpPage />
                  ) 
              } />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;