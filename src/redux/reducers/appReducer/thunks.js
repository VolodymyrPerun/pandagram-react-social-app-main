import {authMe} from "../authReducer/thunks";
import {initializedSuccess} from "./actions";


export const initializeApp = () => async dispatch => {
    await Promise.all([dispatch(authMe())]);
    dispatch(initializedSuccess());
};
