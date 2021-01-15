import {sidebarAPI} from "../API/sidebarAPI/sidebarAPI";
import {setTotalFriendsCount} from "./friends-reducer";

let SET_FRIENDS = 'SET_FRIENDS';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    friends: [],
};

const reducerSidebar = (state = initialState, action) => {
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

export const setFriends = friends => ({type: SET_FRIENDS, friends});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getSidebarFriends = () => {
    return dispatch => {
        dispatch(setIsFetching(true));
        sidebarAPI.getSidebarFriends()
            .then(data => {
                dispatch(setIsFetching(false));
                dispatch(setFriends(data.items));
                dispatch(setTotalFriendsCount(data.totalCount));
            });
    }
}

export default reducerSidebar;
