// import {profileAPI} from "../../API/profileAPI/profileAPI";
//
// const ADD_POST = 'pandagram-react-social-app-main/profile/ADD-POST';
// let TOGGLE_IS_FETCHING = 'pandagram-react-social-app-main/profile/TOGGLE_IS_FETCHING';
// let SET_USER_PROFILE = 'pandagram-react-social-app-main/profile/SET-USER-PROFILE';
// let SET_USER_STATUS = 'pandagram-react-social-app-main/profile/SET_USER_STATUS';
// let DELETE_POST = 'pandagram-react-social-app-main/profile/DELETE_POST';
//
// let initialState = {
//     posts: [
//         {id: 1, message: 'Hi, how are you?', likesCount: 3},
//         {id: 2, message: "It's my first post", likesCount: 45},
//         {id: 3, message: "What's up!!! Dude!!!", likesCount: 5}
//     ],
//     profile: null,
//     isFetching: true,
//     status: ''
// };
//
// const profileReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_POST:
//             return {
//                 ...state,
//                 posts: [
//                     ...state.posts,
//                     {id: 4, message: action.newPostText, likesCount: 0}
//                 ],
//             };
//         case TOGGLE_IS_FETCHING:
//             return {
//                 ...state,
//                 isFetching: action.isFetching
//             };
//         case SET_USER_PROFILE:
//             return {
//                 ...state,
//                 profile: action.profile
//             };
//         case SET_USER_STATUS:
//             return {
//                 ...state,
//                 status: action.status
//             };
//         case DELETE_POST:
//             return {
//                 ...state,
//                 posts: state.posts.filter(p => p.id !== action.id)
//             };
//         default:
//             return state;
//     }
// };
//
// export const addPost = newPostText => ({type: ADD_POST, newPostText});
// export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
// export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
// export const setStatus = status => ({type: SET_USER_STATUS, status});
// export const deletePost = id => ({type: DELETE_POST, id});
//
// export const getUserProfile = userId => async dispatch => {
//     dispatch(setIsFetching(true));
//     let response = await profileAPI.getProfile(userId);
//     dispatch(setIsFetching(false));
//     dispatch(setUserProfile(response.data));
//
// };
//
// export const getUserStatus = userId => async dispatch => {
//     let response = await profileAPI.getStatus(userId);
//     dispatch(setStatus(response.data));
// };
//
// export const updateUserStatus = status => async dispatch => {
//     let response = await profileAPI.updateStatus(status);
//     if (response.data.resultCode === 0) {
//         dispatch(setStatus(status));
//     }
// };
//
// export default profileReducer;
