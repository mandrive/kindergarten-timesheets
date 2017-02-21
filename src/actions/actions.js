import groups from './../data/groups';
import children from './../data/children';
import * as ACTIONS from './const';

export const fetchGroups = () => {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.FETCH_GROUPS_IN_PROGRESS
        });

        setTimeout(() => {
            dispatch({
                type: ACTIONS.FETCH_GROUPS_SUCCEDED,
                payload: groups
        })}, 1500);
    }
}

export const fetchChildren = () => {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.FETCH_CHILDREN_IN_PROGRESS
        });

        setTimeout(() => {
            dispatch({
                type: ACTIONS.FETCH_CHILDREN_SUCCEDED,
                payload: children
        })}, 1500);
    }
}

export const selectGroup = (groupId) => {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SELECT_GROUP,
            payload: groupId
        });
    }
}