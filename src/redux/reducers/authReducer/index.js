import {SET_USER_DATA} from './constants';


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

export default authReducer;
