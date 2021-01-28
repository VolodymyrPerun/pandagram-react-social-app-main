// import {friendsAPI} from "../API/friendsAPI/friendsAPI";
//
// let FOLLOW = 'pandagram-react-social-app-main/friends/FOLLOW';
// let UNFOLLOW = 'pandagram-react-social-app-main/friends/UNFOLLOW';
// let SET_FRIENDS = 'pandagram-react-social-app-main/friends/SET_FRIENDS';
// let SET_PAGE_SIZE = 'pandagram-react-social-app-main/friends/SET_PAGE_SIZE';
// let SET_CURRENT_PAGE = 'pandagram-react-social-app-main/friends/SET_CURRENT_PAGE';
// let SET_TOTAL_FRIENDS_COUNT = 'pandagram-react-social-app-main/friends/SET_TOTAL_FRIENDS_COUNT';
// let TOGGLE_IS_FETCHING = 'pandagram-react-social-app-main/friends/TOGGLE_IS_FETCHING';
// let TOGGLE_IS_FOLLOWING_PROGRESS = 'pandagram-react-social-app-main/friends/TOGGLE_IS_FOLLOWING_PROGRESS';
//
//
// let initialState = {
//     friends: [],
//     pageSize: 10,
//     totalFriendsCount: 0,
//     currentPage: 1,
//     isFetching: true,
//     followingInProgress: []
// };
//
// const friendsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FOLLOW:
//             return {
//                 ...state,
//                 friends: state.friends.map(f => f.id === action.id ? {...f, followed: true} : f)
//             };
//         case UNFOLLOW:
//             return {
//                 ...state,
//                 friends: state.friends.map(f => f.id === action.id ? {...f, followed: false} : f)
//             };
//         case SET_FRIENDS:
//             return {
//                 ...state,
//                 friends: action.friends
//             }
//         case SET_CURRENT_PAGE:
//             return {
//                 ...state,
//                 currentPage: action.currentPage
//             }
//         case SET_TOTAL_FRIENDS_COUNT:
//             return {
//                 ...state,
//                 totalFriendsCount: action.totalFriendsCount
//             }
//         case SET_PAGE_SIZE:
//             return {
//                 ...state,
//                 pageSize: action.pageSize
//             }
//         case TOGGLE_IS_FETCHING:
//             return {
//                 ...state,
//                 isFetching: action.isFetching
//             }
//         case TOGGLE_IS_FOLLOWING_PROGRESS:
//             return {
//                 ...state,
//                 followingInProgress: action.followingInProgress
//                     ? [state.followingInProgress, action.id]
//                     : [state.followingInProgress.filter(id => id !== action.id)]
//             }
//         default:
//             return state;
//     }
// };
//
// export const follow = id => ({type: FOLLOW, id});
// export const unfollow = id => ({type: UNFOLLOW, id});
// export const setFriends = friends => ({type: SET_FRIENDS, friends});
// export const setPageSize = pageSize => ({type: SET_PAGE_SIZE, pageSize});
// export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
// export const setTotalFriendsCount = totalFriendsCount => ({
//     type: SET_TOTAL_FRIENDS_COUNT,
//     totalFriendsCount
// });
// export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
// export const toggleFollowingInProgress = (followingInProgress, id) => ({
//     type: TOGGLE_IS_FOLLOWING_PROGRESS,
//     followingInProgress,
//     id
// });
//
// export const getAllFriends = (currentPage, pageSize) => async dispatch => {
//     dispatch(setIsFetching(true));
//     dispatch(setCurrentPage(currentPage));
//     let response = await friendsAPI.getFriends(currentPage, pageSize);
//     dispatch(setIsFetching(false));
//     dispatch(setFriends(response.data.items));
//     dispatch(setTotalFriendsCount(response.data.totalCount));
//
// }
//
// export const unfollowToggle = id => async dispatch => {
//     dispatch(toggleFollowingInProgress(true, id));
//     let response = await friendsAPI.unfollow(id);
//     if (response.resultCode === 0) {
//         dispatch(unfollow(id));
//     }
//     dispatch(toggleFollowingInProgress(false, id));
// }
//
// export const followToggle = id => async dispatch => {
//     dispatch(toggleFollowingInProgress(true, id));
//     let response = await friendsAPI.follow(id);
//     if (response.resultCode === 0) {
//         dispatch(follow(id));
//     }
//     dispatch(toggleFollowingInProgress(false, id));
// }
//
// export default friendsReducer;
