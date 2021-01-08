let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_FRIENDS = 'SET_FRIENDS';
let SET_PAGE_SIZE = 'SET_PAGE_SIZE';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';

// let current_date = new Date();
// let cmm = current_date.getFullYear();

let initialState = {
    friends: [
        // {
        //     id: '1',
        //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6rJRc-gmleY_o81I3XqmRUdcbi1cSVA9-0pginDiZcjatHaTm&s',
        //     status: 'What`s app!',
        //     name: 'Andriy',
        //     surname: 'Limych',
        //     age: cmm - 1995,
        //     sex: 'man',
        //     address: 'Novoyavorivsk',
        //     followed: true
        // },
        // {
        //     id: '2',
        //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1asMeOM9Iu5WLkWA2zBSt880Byy0pNsBep-mzrmuMdn3ciYJ&s',
        //     status: 'Don`t talk to much!',
        //     name: 'Vasil',
        //     surname: 'Limych',
        //     age: cmm - 2000,
        //     sex: 'man',
        //     address: 'Buchaly',
        //     followed: true
        // },
        // {
        //     id: '3',
        //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwuUp8Er5oGVlTHuRSa3HOuRK6hCrynJwCz-ILNE4H8v_TXV56Q&s',
        //     status: 'In node we trust!',
        //     name: 'Victor',
        //     surname: 'Fazer',
        //     age: '22',
        //     sex: 'man',
        //     address: 'Mykolaiv',
        //     followed: true
        // },
        // {
        //     id: '4',
        //     avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png',
        //     status: 'PHP the best!',
        //     name: 'Igor',
        //     surname: 'Kynitskyi',
        //     age: cmm - 1987,
        //     sex: 'man',
        //     address: 'Lviv',
        //     followed: true
        // },
        // {
        //     id: '5',
        //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sg0fDxi7hWNevmAoJaYwYtporvxrqM8cG_btxW1ToTOAZM92&s',
        //     status: 'Like to play games!',
        //     name: 'Nazar',
        //     surname: 'Boxxyy',
        //     age: cmm - 1997,
        //     sex: 'man',
        //     address: 'Lviv',
        //     followed: true
        // },
        // {
        //     id: '6',
        //     avatar: 'https://cdn3.iconfinder.com/data/icons/women-avatars/314/1-01-512.png',
        //     status: 'Need some money everytime!',
        //     name: 'Irina',
        //     surname: 'Perun',
        //     age: cmm - 1990,
        //     sex: 'woman',
        //     address: 'Komarno',
        //     followed: true
        // },
        // {
        //     id: '7',
        //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXbvq8MhynRVIMj8WtRXSLN5quNTSBoFl4hvmKplLPo5qnsTE&s',
        //     status: 'Can i take a phone please!',
        //     name: 'Veronica',
        //     surname: 'Perun',
        //     age: cmm - 2012,
        //     sex: 'woman',
        //     address: 'Komarno',
        //     followed: true
        // },
        // {
        //     id: '8',
        //     avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83cbwqMY5hTwutBPn1X0xSHMTSqezfVVXM_ZQ3C6nQo48boOd&s',
        //     status: 'Lets go drink...!',
        //     name: 'Marian',
        //     surname: 'Sorokivsky',
        //     age: cmm - 1986,
        //     sex: 'man',
        //     address: 'Komarno',
        //     followed: 'true'
        // },
        // {
        //     id: '9',
        //     avatar: 'https://cdn.iconscout.com/icon/free/png-256/ninja-1659490-1410012.png',
        //     status: 'I am at astral...',
        //     name: 'Eugene',
        //     surname: 'Kozoriz',
        //     age: cmm - 1987,
        //     sex: 'man',
        //     address: 'Komarno',
        //     followed: true
        // },
        // {
        //     id: '10',
        //     avatar: 'https://cdn2.iconfinder.com/data/icons/super-hero/154/ironman-head-comics-avatar-iron-man-512.png',
        //     status: 'Saving the world...',
        //     name: 'Iron',
        //     surname: 'Man',
        //     age: cmm - 1986,
        //     sex: 'man',
        //     address: 'Hell Kitchen',
        //     followed: false
        // },
        // {
        //     id: '11',
        //     avatar: 'https://st3.depositphotos.com/8688502/16366/v/450/depositphotos_163664446-stock-illustration-mans-face-avatar.jpg',
        //     status: 'Winter is coming!',
        //     name: 'Jon',
        //     surname: 'Snow',
        //     age: '31',
        //     sex: 'man',
        //     address: 'Winterfell',
        //     followed: true
        // },
        // {
        //     id: '12',
        //     avatar: 'data:image/png;base64,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',
        //     status: 'I love hardware, but I will choose data science!',
        //     name: 'Taras',
        //     surname: 'Repetylo',
        //     age: cmm - 1986,
        //     sex: 'man',
        //     address: 'Lviv',
        //     followed: true
        // }
    ],
    pageSize: 10,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: false
};

const reducerFriends = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(f => f.id === action.userId ? {...f, followed: true} : f)
            };
        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map(f => f.id === action.userId ? {...f, followed: false} : f)
            };
        case SET_FRIENDS:
            return {
                ...state,
                friends: [...action.friends]
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
        default:
            return state;
    }
};

export const followActionCreator = userId => ({type: FOLLOW, userId});
export const unfollowActionCreator = userId => ({type: UNFOLLOW, userId});
export const setFriendsActionCreator = friends => ({type: SET_FRIENDS, friends});
export const setPageSizeActionCreator = pageSize => ({type: SET_PAGE_SIZE, pageSize});
export const setCurrentPageActionCreator = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalFriendsCountActionCreator = totalFriendsCount => ({
    type: SET_TOTAL_FRIENDS_COUNT,
    totalFriendsCount
});
export default reducerFriends;
