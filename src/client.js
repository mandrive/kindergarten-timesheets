import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import ApplicationContainer from './containers/ApplicationContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createStore, combineReducers } from 'redux'
import {deepPurple500, lightBlue600} from 'material-ui/styles/colors';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { defineRoutes } from './routes';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
    primary2Color: lightBlue600
  },
});

ReactDOM.render(
  <AppContainer>
    <MuiThemeProvider muiTheme={muiTheme}>
      {defineRoutes()}
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/ApplicationContainer', () => {
    const newApplicationContainer = require('./containers/ApplicationContainer').default; // eslint-disable-line global-require
    ReactDOM.render(
        <AppContainer>
          <MuiThemeProvider muiTheme={muiTheme}>
            {defineRoutes(newApplicationContainer)}
          </MuiThemeProvider>
        </AppContainer>,
      document.getElementById('app')
    );
  });
}
