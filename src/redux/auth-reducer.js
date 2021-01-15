import {authAPI} from "../API/authAPI/authAPI";
let SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const authMe = () => dispatch  => {
        authAPI.authMe()
            .then(res => {
                // console.log(res.data.data);
                if (res.resultCode === 0) {
                    let {id, email, login} = res.data.data;

                    dispatch(setAuthUserData(id, email, login));
                }
            });
}

export default reducerAuth;
