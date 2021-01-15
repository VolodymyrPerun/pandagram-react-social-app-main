import instance from "../API";


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
            .then(response => {
                return response.data;
            });
    }
}


