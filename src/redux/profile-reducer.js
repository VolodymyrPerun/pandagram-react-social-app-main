import {authAPI} from "../API/authAPI/authAPI";
import {profileAPI} from "../API/profileAPI/profileAPI";

const ADD_POST = 'ADD-POST';
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
    id: null,
    profile: null,
    isFetching: true,
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: 4, message: action.newPostText, likesCount: 0}
                ],
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

export const addPost = newPostText => ({type: ADD_POST, newPostText});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_USER_STATUS, status});
export const setAuthUserData = (login, id, email) => ({type: SET_USER_DATA, data: {login, id, email}});

export const getUserProfile = userId => dispatch => {
    dispatch(setIsFetching(true));
    authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {login, id, email} = response.data.data;
                dispatch(setAuthUserData(login, id, email));
                profileAPI.getProfile(userId != null ? userId : id)
                    .then(response => {
                        dispatch(setIsFetching(false));
                        dispatch(setUserProfile(response.data));
                    });
            }
        });
}


export const getUserStatus = userId => dispatch => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateUserStatus = status => dispatch => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;
