import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createStore, combineReducers } from 'redux'
import {deepPurple500, lightBlue600} from 'material-ui/styles/colors';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import 'tether';
require('bootstrap');

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
    primary2Color: lightBlue600
  },
});

const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <AppContainer>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default; // eslint-disable-line global-require
    ReactDOM.render(
        <AppContainer>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Router history={history}>
              <Route path="/" component={NextApp} />
            </Router>
          </MuiThemeProvider>
        </AppContainer>,
      document.getElementById('app')
    );
  });
}
