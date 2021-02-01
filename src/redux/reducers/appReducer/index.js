import {GLOBAL_ERROR, INITIALIZED_SUCCESS} from './constants';


let initialState = {
    initialized: false,
    globalError: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.globalError
            };
        default:
            return state;
    }
};

export default appReducer;
