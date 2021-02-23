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


let initialState = {
    friends: [],
    pageSize: 10,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(f => f.id === action.id ? {...f, followed: true} : f)
            };
        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map(f => f.id === action.id ? {...f, followed: false} : f)
            };
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_FRIENDS_COUNT:
            return {
                ...state,
                totalFriendsCount: action.totalFriendsCount
            }
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.pageSize
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [state.followingInProgress, action.id]
                    : [state.followingInProgress.filter(id => id !== action.id)]
            }
        default:
            return state;
    }
};

export default friendsReducer;
