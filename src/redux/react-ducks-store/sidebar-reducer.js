// import {sidebarAPI} from "../API/sidebarAPI/sidebarAPI";
//
// let SET_FRIENDS = 'pandagram-react-social-app-main/sidebar/SET_FRIENDS';
// let TOGGLE_IS_FETCHING = 'pandagram-react-social-app-main/sidebar/TOGGLE_IS_FETCHING';
//
//
// let initialState = {
//     friends: [],
// };
//
// const sidebarReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_FRIENDS:
//             return {
//                 ...state,
//                 friends: [...action.friends]
//             }
//         case TOGGLE_IS_FETCHING:
//             return {
//                 ...state,
//                 isFetching: action.isFetching
//             }
//         default:
//             return state;
//     }
// };
//
// export const setFriends = friends => ({type: SET_FRIENDS, friends});
// export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
//
// export const getSidebarFriends = () => async dispatch => {
//     dispatch(setIsFetching(true));
//     let response = await sidebarAPI.getSidebarFriends();
//     dispatch(setIsFetching(false));
//     dispatch(setFriends(response.data.items));
// }
//
// export default sidebarReducer;
