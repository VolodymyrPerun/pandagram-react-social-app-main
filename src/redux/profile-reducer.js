import {authAPI} from "../API/authAPI/authAPI";
import {profileAPI} from "../API/profileAPI/profileAPI";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let SET_USER_PROFILE = 'SET-USER-PROFILE';
let SET_USER_DATA = 'SET_USER_DATA';
let SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: "It's my first post", likesCount: 45},
        {id: 3, message: "What's up!!! Dude!!!", likesCount: 5}
    ],
    newPostText: 'Hello!!!',
    id: null,
    profile: null,
    isFetching: true,
    status: ''
};

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: 4, message: state.newPostText, likesCount: 0}
                ],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_USER_STATUS, status});
export const setAuthUserData = (login, id, email) => ({type: SET_USER_DATA, data: {login, id, email}});

export const getUserProfile = userId => {
    return dispatch => {
        dispatch(setIsFetching(true));
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {login, id, email} = data.data;
                    dispatch(setAuthUserData(login, id, email));
                    profileAPI.getProfile(userId != null ? userId : id)
                        .then(data => {
                            dispatch(setIsFetching(false));
                            dispatch(setUserProfile(data));
                        });
                }
            });
    }
}

export const getUserStatus = userId => {
    return dispatch => {
        profileAPI.getStatus(userId)
            .then(data => {
                debugger;
                dispatch(setStatus(data));
            });
    }
}

export const updateUserStatus = status => {
    return dispatch => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(updateUserStatus(data));
                }
            });
    }
}

export default reducerProfile;
