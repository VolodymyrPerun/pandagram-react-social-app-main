import instance from '../../helpers/API';


export const secureAPI = {
    getSecureCaptchaUrl() {
        return instance.get(`/security/get-captcha-url`);
    }
};



