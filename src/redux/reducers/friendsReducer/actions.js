import {
    TOGGLE_IS_FOLLOWING_PROGRESS,
    TOGGLE_IS_FETCHING,
    SET_FRIENDS,
    SET_PAGE_SIZE,
    SET_TOTAL_FRIENDS_COUNT,
    SET_CURRENT_PAGE,
    UNFOLLOW,
    FOLLOW
} from './constants';


export const follow = id => ({type: FOLLOW, id});
export const unfollow = id => ({type: UNFOLLOW, id});
export const setFriends = payload => ({type: SET_FRIENDS, payload});
export const setPageSize = pageSize => ({type: SET_PAGE_SIZE, pageSize});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalFriendsCount = totalFriendsCount => ({
    type: SET_TOTAL_FRIENDS_COUNT,
    totalFriendsCount
});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (followingInProgress, id) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    id
});
