import {
    ADD_POST,
    DELETE_POST,
    TOGGLE_IS_FETCHING,
    SET_USER_PROFILE,
    SET_USER_STATUS,
    SET_PROFILE_PHOTO
} from './constants';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: "It's my first post", likesCount: 45},
        {id: 3, message: "What's up!!! Dude!!!", likesCount: 5}
    ],
    profile: null,
    isFetching: true,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: 4, message: action.newPostText, likesCount: 0}
                ],
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
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            };
        case SET_PROFILE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state;
    }
};

export default profileReducer;
