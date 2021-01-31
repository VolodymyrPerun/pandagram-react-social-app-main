import {SET_USER_DATA, GET_CAPTCHA_URL_SUCCESS} from './constants';


export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getCaptchaUrlSuccess = captchaUrl =>
    ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});
