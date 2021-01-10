const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: "It's my first post", likesCount: 45},
        {id: 3, message: "What's up!!! Dude!!!", likesCount: 5}
    ],
    newPostText: 'Hello!!!',
    profile: null,
    isFetching: true
};

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: 4, message: state.newPostText, likesCount: 0}
                ],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export default reducerProfile;
