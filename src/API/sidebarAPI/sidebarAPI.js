import instance from '../API';


export const sidebarAPI = {
    getSidebarFriends(currentPage = 1, pageSize = 3) {
    return instance(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}



