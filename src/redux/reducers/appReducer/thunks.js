import {authMe} from "../authReducer/thunks";
import {initializedSuccess, setGlobalError} from "./actions";


export const initializeApp = () => async dispatch => {
    await Promise.all([dispatch(authMe())]);
    dispatch(initializedSuccess());
};

export const catchGlobalError = (globalError) => async dispatch => {
    dispatch(setGlobalError(globalError));
};
