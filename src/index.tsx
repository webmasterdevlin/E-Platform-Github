/**
 * myProfile.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import './main-color.css';
import './style.css';
import './plugins/revolutionslider.css';
import './bootstrap-grid.css';
import './icons.css';
import './invoice.css';
import './styles/index.css';
import './styles/autosuggest.css';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import '../node_modules/bootstrap-utilities/bootstrap-utilities.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import * as serviceWorker from 'serviceWorker';

import CssBaseline from '@material-ui/core/CssBaseline';

// Initialize languages
import './locales/i18n';

import { App } from 'app';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { materialUiCustomerStyle } from './styles/material-ui.custom';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Inter', {});

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

type Props = {
  Component: typeof App;
};

const theme = createMuiTheme(materialUiCustomerStyle);

const ConnectedApp: React.FC<Props> = ({ Component }) => (
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <CssBaseline>
        <Provider store={store}>
          <HelmetProvider>
            {/*<React.StrictMode>*/}
            <Component />
            {/*</React.StrictMode>*/}
          </HelmetProvider>
        </Provider>
      </CssBaseline>
    </MuiPickersUtilsProvider>
  </ThemeProvider>
);

const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./app', './locales/i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    const App = require('./app').App;
    render(App);
  });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
