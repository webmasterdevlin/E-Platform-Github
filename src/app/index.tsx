/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import {
  deleteAccessToken,
  getAccessToken,
  setAccessToken,
  TokenFromLocalStorageIsValid,
} from './features/auth/auth.localstorage.service';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../store/types';
import { Dispatch } from 'redux';
import { saveUserToStoreAction } from './features/auth/sign-in/sign-in.actions';
import { useEffect } from 'react';

export function App() {
  const dispatch: Dispatch = useDispatch();

  const { accessToken, logout } = useSelector(
    (state: IApplicationState) => state.signInReducer,
  );

  useEffect(() => {
    const token = accessToken;
    const manualLogout = logout;

    if (TokenFromLocalStorageIsValid()) {
      getAccessToken();
      dispatch(saveUserToStoreAction());
    }
    deleteAccessToken();

    if (!manualLogout) {
      window.addEventListener('beforeunload', function (event) {
        setAccessToken(token);
      });
    }
  }, [accessToken, logout]);

  return (
    <BrowserRouter>
      <>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="E-Platform"
        >
          <meta name="description" content="E Learning Platform Application" />
          <link rel="stylesheet" href="../style.css" />
          <link rel="stylesheet" href="../main-color.css" />
          <link rel="stylesheet" href="../icons.css" />
          <link rel="stylesheet" href="../invoice.css" />
          <link rel="stylesheet" href="../bootstrap-grid.css" />
          <link rel="stylesheet" href="../plugins/revolutionslider.css" />
          <script type="text/javascript" src="../scripts/jquery-3.4.1.min.js" />
          <script
            type="text/javascript"
            src="../scripts/jquery-migrate-3.1.0.min.js"
          />
          <script type="text/javascript" src="../scripts/mmenu.min.js" />
          <script type="text/javascript" src="../scripts/chosen.min.js" />
          <script type="text/javascript" src="../scripts/slick.min.js" />
          <script
            type="text/javascript"
            src="../scripts/magnific-popup.min.js"
          />
          <script type="text/javascript" src="../scripts/waypoints.min.js" />
          <script type="text/javascript" src="../scripts/counterup.min.js" />
          <script type="text/javascript" src="../scripts/jquery-ui.min.js" />
          <script type="text/javascript" src="../scripts/rangeslider.min.js" />
          <script type="text/javascript" src="../scripts/tooltips.min.js" />
          <script type="text/javascript" src="../scripts/custom.js" />
        </Helmet>

        {process.env.NODE_ENV === 'development' ? (
          <div className="ribbon dev">
            <span>DEV Environment</span>
          </div>
        ) : null}
        <Router />
      </>
    </BrowserRouter>
  );
}
