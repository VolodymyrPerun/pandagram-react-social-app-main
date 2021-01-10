let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    usrId: null,
    email: null,
    login: null,
    isAuth: false
};

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(f => f.id === action.userId ? {...f, followed: true} : f)
            };
        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map(f => f.id === action.userId ? {...f, followed: false} : f)
            };
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

export const follow = userId => ({type: FOLLOW, userId});
export const unfollow = userId => ({type: UNFOLLOW, userId});
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export default reducerAuth;
