import instance from '../../helpers/API';


export const sidebarAPI = {
    getSidebarFriends() {
    return instance(`users?page=1&count=3`)
            .then(response => {
                return response.data;
            });
    }
};



