import {authAPI} from "../../../API/authAPI/authAPI";
import {stopSubmit} from "redux-form";
import {setAuthUserData} from "./actions";


export const authMe = () => async dispatch => {
    let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async dispatch => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(authMe());
    } else {
        let message = response.data.messages && response.data.messages.length > 0
            ? response.data.messages[0] :
            "Wrong email or password!"
        dispatch(stopSubmit("loginForm", {_error: message}));
    }
};

export const logout = () => async dispatch => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};
