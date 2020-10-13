import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.componet';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser === null) {
      auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            dispatch(setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            }));
          });
        } else {
          setCurrentUser(null);
        }
      })
    }
  }, [currentUser, dispatch])

  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
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
      </Switch>
    </div>
  );
}

export default App;
