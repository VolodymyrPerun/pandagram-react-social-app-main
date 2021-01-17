import instance from '../API';


export const loginAPI = {
    login() {
        return instance.post(`auth/login`);
    }
};




