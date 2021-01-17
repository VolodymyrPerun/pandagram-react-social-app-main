import instance from '../API';


export const authAPI = {
    authMe() {
        return instance.get(`auth/me`);
    }
};




