import instance from '../API';


export const authAPI = {
    authMe() {
        debugger
        return instance.get(`auth/me`);
    }
}




