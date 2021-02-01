import {GLOBAL_ERROR, INITIALIZED_SUCCESS} from './constants';


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const setGlobalError = (globalError) => ({type: GLOBAL_ERROR, globalError});
