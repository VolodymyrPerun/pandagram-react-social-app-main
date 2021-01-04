const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
let SET_FRIENDS = 'SET_FRIENDS';

let current_date = new Date();
let cmm = current_date.getFullYear();

let initialState = {
    friends: [
        {
            id: '1',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6rJRc-gmleY_o81I3XqmRUdcbi1cSVA9-0pginDiZcjatHaTm&s',
            status: 'What`s app!',
            name: 'Andriy',
            surname: 'Limych',
            age: '25',
            sex: 'man',
            address: 'Novoyavorivsk',
            followed: true
        },
        {
            id: '2',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1asMeOM9Iu5WLkWA2zBSt880Byy0pNsBep-mzrmuMdn3ciYJ&s',
            status: 'Don1t talk to much!',
            name: 'Vasil',
            surname: 'Limych',
            age: '20',
            sex: 'man',
            address: 'Buchaly',
            followed: true
        },
        {
            id: '3',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwuUp8Er5oGVlTHuRSa3HOuRK6hCrynJwCz-ILNE4H8v_TXV56Q&s',
            status: 'In node we trust!',
            name: 'Victor',
            surname: 'Fazer',
            age: '22',
            sex: 'man',
            address: 'Mykolaiv',
            followed: true
        },
        {
            id: '4',
            avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png',
            status: 'PHP the best!',
            name: 'Igor',
            surname: 'Kynitskyi',
            age: '31',
            sex: 'man',
            address: 'Lviv',
            followed: true
        },
        {
            id: '5',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sg0fDxi7hWNevmAoJaYwYtporvxrqM8cG_btxW1ToTOAZM92&s',
            status: 'Like to play games!',
            name: 'Nazar',
            surname: 'Boxxyy',
            age: '21',
            sex: 'man',
            address: 'Lviv',
            followed: true
        },
        {
            id: '6',
            avatar: 'https://cdn3.iconfinder.com/data/icons/women-avatars/314/1-01-512.png',
            status: 'Need some money everytime!',
            name: 'Irina',
            surname: 'Perun',
            age: '29',
            sex: 'woman',
            address: 'Komarno',
            followed: true
        },
        {
            id: '7',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXbvq8MhynRVIMj8WtRXSLN5quNTSBoFl4hvmKplLPo5qnsTE&s',
            status: 'Can i take a phone please!',
            name: 'Veronica',
            surname: 'Perun',
            age: '7',
            sex: 'woman',
            address: 'Komarno',
            followed: true
        },
        {
            id: '8',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83cbwqMY5hTwutBPn1X0xSHMTSqezfVVXM_ZQ3C6nQo48boOd&s',
            status: 'Lets go drink...!',
            name: 'Marian',
            surname: 'Sorokivsky',
            age: '33',
            sex: 'man',
            address: 'Komarno',
            followed: 'true'
        },
        {
            id: '9',
            avatar: 'https://cdn.iconscout.com/icon/free/png-256/ninja-1659490-1410012.png',
            status: 'I am at astral...',
            name: 'Eugene',
            surname: 'Kozoriz',
            age: '32',
            sex: 'man',
            address: 'Komarno',
            followed: true
        },
        {
            id: '10',
            avatar: 'https://cdn2.iconfinder.com/data/icons/super-hero/154/ironman-head-comics-avatar-iron-man-512.png',
            status: 'Saving the world...',
            name: 'Iron',
            surname: 'Man',
            age: cmm - 1986,
            sex: 'man',
            address: 'Hell Kitchen',
            followed: false
        },
        {
            id: '11',
            avatar: 'https://st3.depositphotos.com/8688502/16366/v/450/depositphotos_163664446-stock-illustration-mans-face-avatar.jpg',
            status: 'Winter is coming!',
            name: 'Jon',
            surname: 'Snow',
            age: '31',
            sex: 'man',
            address: 'Winterfell',
            followed: true
        },
    ],
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
                friends: [...state.friends, ...action.friends]
            }
        default:
            return state;
    }
};

export const followActionCreator = userId => ({type: FOLLOW, userId});
export const unfollowActionCreator = userId => ({type: UNFOLLOW, userId});
export const setFriendsActionCreator = friends => ({type: SET_FRIENDS, friends});
export default reducerFriends;
