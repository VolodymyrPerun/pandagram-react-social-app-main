import {TOGGLE_IS_FETCHING, ADD_MESSAGE} from './constants';


export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const addMessage = newMessageText => ({type: ADD_MESSAGE, newMessageText});
