import {sidebarAPI} from "../../../API/sidebarAPI/sidebarAPI";
import {setFriends, setIsFetching} from "./actions";


export const getSidebarFriends = () => async dispatch => {
    dispatch(setIsFetching(true));
    let response = await sidebarAPI.getSidebarFriends();
    dispatch(setIsFetching(false));
    dispatch(setFriends(response.data.items));
};
