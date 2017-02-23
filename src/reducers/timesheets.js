import * as ACTIONS from './../actions/const';

const timesheetsInitialState = {
  byId: [],
  allIds: [],
  fetching: false
};

export const timesheets = (state = timesheetsInitialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_TIMESHEETS_IN_PROGRESS:
      return {
        ...state,
        fetching: true
      };
    case ACTIONS.FETCH_TIMESHEETS_SUCCEDED:
    debugger;
      return {
        ...state,
        byId: action.payload,
        allIds: action.payload.map(t => t.id),
        fetching: false
      };
    case ACTIONS.FETCH_TIMESHEETS_FAILED:
      return {
        ...state,
        fetching: false
      };
    default:
      return state;
  }
};
