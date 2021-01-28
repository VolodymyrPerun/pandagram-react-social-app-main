import {TOGGLE_IS_FETCHING, SET_FRIENDS} from './constants';


export const setFriends = friends => ({type: SET_FRIENDS, friends});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
