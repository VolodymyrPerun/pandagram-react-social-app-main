import {TOGGLE_IS_FETCHING, SET_FRIENDS} from './constants';


let initialState = {
    friends: [],
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friends: [...action.friends]
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
};

export default sidebarReducer;
