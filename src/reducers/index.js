import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { children } from './children';
import { groups } from './groups';
import { timesheets } from './timesheets';

const reducers = {
  children,
  groups,
  timesheets,
  routing: routerReducer
};

const combined = combineReducers(reducers);
module.exports = combined;
