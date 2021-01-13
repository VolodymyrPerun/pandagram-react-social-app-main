import * as axios from "axios";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "fd89518c-759b-4904-9591-fee083bc046a"
    }
})

export const friendsAPI = {
    getFriends(currentPage = 1, pageSize = 10) {
        return instance(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
}

export const sidebarAPI = {
    getSidebarFriends(currentPage = 1, pageSize = 3) {
    return instance(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}

export const authAPI = {
    authMe() {
    return instance(`auth/me`)
        .then(response => {
            return response.data;
        });
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    }
}



