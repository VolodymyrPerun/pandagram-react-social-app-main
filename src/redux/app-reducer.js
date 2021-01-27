import {authMe} from "./auth-reducer";

let INITIALIZED_SUCCESS = 'pandagram-react-social-app-main/app/INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async dispatch => {
    await Promise.all([dispatch(authMe())]);
    dispatch(initializedSuccess());
};

export default appReducer;
