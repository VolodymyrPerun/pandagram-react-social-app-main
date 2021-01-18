import instance from '../../helpers/API';


export const authAPI = {
    authMe() {
        return instance.get(`auth/me`);
    }
};




