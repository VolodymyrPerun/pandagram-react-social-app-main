import {authAPI} from "../../../API/authAPI/authAPI";
import {secureAPI} from "../../../API/secureAPI/secureAPI"
import {stopSubmit} from "redux-form";
import {getCaptchaUrlSuccess, setAuthUserData} from "./actions";


export const authMe = () => async dispatch => {
    let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe, captcha) => async dispatch => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
        dispatch(authMe());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages && response.data.messages.length > 0
            ? response.data.messages[0] :
            "Wrong email or password!"
        dispatch(stopSubmit("loginForm", {_error: message}));
    }
};

export const getCaptchaUrl = () => async dispatch => {
    const response = await secureAPI.getSecureCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async dispatch => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};
