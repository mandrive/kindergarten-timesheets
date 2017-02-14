import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';
import ApplicationContainer from './../containers/ApplicationContainer';
import App from './../components/App';
import TestComponent from './../components/TestComponent';

const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

export const defineRoutes = (applicationContainer = ApplicationContainer) => {
    return (
        <Router history={history}>
            <Route path="/" component={applicationContainer} >
                <IndexRoute component={App} />
                <Route path="/test" component={TestComponent} />
            </Route>
        </Router>)
}