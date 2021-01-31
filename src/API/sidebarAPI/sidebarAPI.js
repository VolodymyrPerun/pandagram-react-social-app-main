import instance from '../../helpers/API';


export const sidebarAPI = {
    getSidebarFriends() {
        return instance.get(`users?page=1&count=3`);
    }
};



