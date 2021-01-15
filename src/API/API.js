import * as axios from "axios";


export default axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "fd89518c-759b-4904-9591-fee083bc046a"
    }
});




