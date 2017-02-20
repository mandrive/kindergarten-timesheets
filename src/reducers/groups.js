import * as ACTIONS from './../actions/const';

const groupsInitialState = {
    groups: [],
    fetchingGroups: false
}
export const name = (state = groupsInitialState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_GROUPS_IN_PROGRESS:
            return {
                ...state,
                fetchingGroups: true
            }
        case ACTIONS.FETCH_GROUPS_FAILED:
            return {
                ...state,
                fetchingGroups: false
            }
        case ACTIONS.FETCH_GROUPS_SUCCEDED:
            return {
                groups: [
                    ...action.payload
                ],
                fetchingGroups: false
            }
        default:
            return state
    }
}