import * as ACTIONS from './../actions/const';

const groupsInitialState = {
    byId: [],
    allIds: [],
    fetchingGroups: false
}
export const groups = (state = groupsInitialState, action) => {
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
                allIds: [action.payload.map(g => g.id)],
                fetchingGroups: false
            }
        default:
            return state
    }
}