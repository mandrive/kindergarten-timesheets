import groups from './../data/groups';
import children from './../data/children';
import timesheets from './../data/timesheets';
import * as ACTIONS from './const';

export const fetchGroups = () => (dispatch) => {
  dispatch({
    type: ACTIONS.FETCH_GROUPS_IN_PROGRESS
  });

  setTimeout(() => {
    dispatch({
      type: ACTIONS.FETCH_GROUPS_SUCCEDED,
      payload: groups
    });
  }, 1500);
};

export const fetchChildren = () => (dispatch) => {
  dispatch({
    type: ACTIONS.FETCH_CHILDREN_IN_PROGRESS
  });

  setTimeout(() => {
    dispatch({
      type: ACTIONS.FETCH_CHILDREN_SUCCEDED,
      payload: children
    });
  }, 1500);
};

export const selectGroup = groupId => (dispatch) => {
  dispatch({
    type: ACTIONS.SELECT_GROUP,
    payload: groupId
  });
};

export const fetchTimesheetsForGroup = groupId => (dispatch) => {
  dispatch({
    type: ACTIONS.FETCH_TIMESHEETS_IN_PROGRESS
  });
  
  const childrenForGroup = children.filter(c => c.groupId == groupId);
  const timesheetsForGroup = timesheets.filter(t => childrenForGroup.findIndex(c => c.id == t.childId) > -1);

  setTimeout(() => {
    dispatch({
      type: ACTIONS.FETCH_TIMESHEETS_SUCCEDED,
      payload: timesheetsForGroup
    })}, 1500);
};
