import {
    ADD_POST,
    DELETE_POST,
    TOGGLE_IS_FETCHING,
    SET_USER_PROFILE,
    SET_USER_STATUS,
    SET_PROFILE_PHOTO
} from './constants';


export const addPost = newPostText => ({type: ADD_POST, newPostText});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_USER_STATUS, status});
export const deletePost = id => ({type: DELETE_POST, id});
export const setPhotoSuccess = photos => ({type: SET_PROFILE_PHOTO, photos});
