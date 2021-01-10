let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_FRIENDS = 'SET_FRIENDS';
let SET_PAGE_SIZE = 'SET_PAGE_SIZE';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    friends: [],
    pageSize: 10,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: true
};

const reducerFriends = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                // ...state,
                // friends: state.friends.map(f => f.id === action.id ? {...f, followed: true} : f)
                ...state,
                friends: state.friends.map(f => {
                    if (f.id === action.id) {
                        return {...f, followed: true}
                    }
                    return f;
                })
            };
        case UNFOLLOW:
            return {
                // ...state,
                // friends: state.friends.map(f => f.id === action.id ? {...f, followed: false} : f)
                ...state,
                friends: state.friends.map(f => {
                    if (f.id === action.id) {
                        return {...f, followed: false}
                    }
                    return f;
                })
            };
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends
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
        default:
            return state;
    }
};

export const follow = id => ({type: FOLLOW, id});
export const unfollow = id => ({type: UNFOLLOW, id});
export const setFriends = friends => ({type: SET_FRIENDS, friends});
export const setPageSize = pageSize => ({type: SET_PAGE_SIZE, pageSize});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalFriendsCount = totalFriendsCount => ({
    type: SET_TOTAL_FRIENDS_COUNT,
    totalFriendsCount
});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export default reducerFriends;
