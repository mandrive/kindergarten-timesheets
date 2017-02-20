import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import ApplicationContainer from './../containers/ApplicationContainer';
import App from './../components/App';
import reduxStore from './../stores';

const store = reduxStore();

const history = syncHistoryWithStore(browserHistory, store)

export const defineRoutes = (applicationContainer = ApplicationContainer) => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={applicationContainer} >
                    <IndexRoute component={App} />
                </Route>
            </Router>
        </Provider>)
}