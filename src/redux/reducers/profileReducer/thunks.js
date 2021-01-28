import {profileAPI} from "../../../API/profileAPI/profileAPI";
import {setIsFetching, setStatus, setUserProfile, setPhotoSuccess} from "./actions";


export const getUserProfile = userId => async dispatch => {
    dispatch(setIsFetching(true));
    let response = await profileAPI.getProfile(userId);
    dispatch(setIsFetching(false));
    dispatch(setUserProfile(response.data));

};

export const getUserStatus = userId => async dispatch => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateUserStatus = status => async dispatch => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = file => async dispatch => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos));
    }
};
