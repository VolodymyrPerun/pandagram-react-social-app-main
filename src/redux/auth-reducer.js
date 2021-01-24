import {authAPI} from "../API/authAPI/authAPI";
import {stopSubmit} from "redux-form";


let SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    password: null,
    login: null,
    isAuth: false,
    rememberMe: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const authMe = () => dispatch => {
    authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
};

export const login = (email, password, rememberMe) => dispatch => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authMe());
            } else {
                let message = response.data.messages && response.data.messages.length > 0
                        ? response.data.messages[0] :
                        "Wrong email or password!"
                dispatch(stopSubmit("loginForm", {_error: message}));
            }
        });
};

export const logout = () => dispatch => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};

export default authReducer;
