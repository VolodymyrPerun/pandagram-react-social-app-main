import {friendsAPI} from "../../../API/friendsAPI/friendsAPI";
import {
    follow,
    unfollow,
    setCurrentPage,
    setFriends,
    setIsFetching,
    setTotalFriendsCount,
    toggleFollowingInProgress,
} from "./actions";


export const getAllFriends = (currentPage, pageSize) => async dispatch => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let response = await friendsAPI.getFriends(currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setFriends(response.data.items));
    dispatch(setTotalFriendsCount(response.data.totalCount));

};

export const unfollowToggle = id => async dispatch => {
    dispatch(toggleFollowingInProgress(true, id));
    let response = await friendsAPI.unfollow(id);
    if (response.resultCode === 0) {
        dispatch(unfollow(id));
    }
    dispatch(toggleFollowingInProgress(false, id));
};

export const followToggle = id => async dispatch => {
    dispatch(toggleFollowingInProgress(true, id));
    let response = await friendsAPI.follow(id);
    if (response.resultCode === 0) {
        dispatch(follow(id));
    }
    dispatch(toggleFollowingInProgress(false, id));
};
