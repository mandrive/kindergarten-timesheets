import groups from './../data/groups';
import children from './../data/children';

export const getAllGroups = () => {
    return (dispatch) => {
        return groups;
    }
}

export const getAllChildren = () => {
    return (dispatch) => {
        return children;
    }
}