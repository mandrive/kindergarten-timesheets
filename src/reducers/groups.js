import * as ACTIONS from './../actions/const';

const groupsInitialState = {
    byId: [],
    allIds: [],
    selectedGroup: {},
    fetching: false
}

export const groups = (state = groupsInitialState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_GROUPS_IN_PROGRESS:
            return {
                ...state,
                fetching: true
            }
        case ACTIONS.FETCH_GROUPS_FAILED:
            return {
                ...state,
                fetching: false
            }
        case ACTIONS.FETCH_GROUPS_SUCCEDED:
            return {
                byId: [
                    ...action.payload
                ],
                allIds: [action.payload.map(g => g.id)],
                fetching: false
            }
        case ACTIONS.SELECT_GROUP:
            return {
                ...state,
                selectedGroup: {...state.byId.find(g => g.id === action.payload)}
            }
        default:
            return state
    }
}