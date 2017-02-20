import * as ACTIONS from './../actions/const';

const childrenInitialState = {
    byId: [],
    allIds: [],
    fetching: false
}
export const children = (state = childrenInitialState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_CHILDREN_IN_PROGRESS:
            return {
                ...state,
                fetching: true
            }
        case ACTIONS.FETCH_CHILDREN_FAILED:
            return {
                ...state,
                fetching: false
            }
        case ACTIONS.FETCH_CHILDREN_SUCCEDED:
            return {
                byId: [...action.payload],
                allIds: [...action.payload.map(x => x.id)],
                fetching: false
            }
        default:
            return state
    }
}