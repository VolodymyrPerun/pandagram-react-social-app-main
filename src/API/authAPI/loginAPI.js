import instance from '../../helpers/API';


export const loginAPI = {
    login() {
        return instance.post(`auth/login`);
    }
};




