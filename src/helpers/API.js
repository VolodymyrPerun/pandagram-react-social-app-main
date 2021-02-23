import * as axios from "axios";


export default axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "a2d2c1d0-d81e-4f9d-bd89-50821b579822"//Big_Man
        //"API-KEY": "fd89518c-759b-4904-9591-fee083bc046a_"//Best_React_JS
    }
});




