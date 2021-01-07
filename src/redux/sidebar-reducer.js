let SET_FRIENDS = 'SET_FRIENDS';

let current_date = new Date();
let cmm = current_date.getFullYear();

let initialState = {
    friends: [
        {
            id: '1',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6rJRc-gmleY_o81I3XqmRUdcbi1cSVA9-0pginDiZcjatHaTm&s',
            name: 'Andriy',
            surname: 'Limych',
            age: '25',
            sex: 'man',
            address: 'Novoyavorivsk'
        },
        {
            id: '2',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1asMeOM9Iu5WLkWA2zBSt880Byy0pNsBep-mzrmuMdn3ciYJ&s',
            name: 'Vasil',
            surname: 'Limych',
            age: '20',
            sex: 'man',
            address: 'Buchaly'
        },
        {
            id: '3',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwuUp8Er5oGVlTHuRSa3HOuRK6hCrynJwCz-ILNE4H8v_TXV56Q&s',
            name: 'Victor',
            surname: 'Fazer',
            age: '22',
            sex: 'man',
            address: 'Mykolaiv'
        },
        {
            id: '4',
            avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png',
            name: 'Igor',
            surname: 'Kynitskyi',
            age: '31',
            sex: 'man',
            address: 'Lviv'
        },
        {
            id: '5',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sg0fDxi7hWNevmAoJaYwYtporvxrqM8cG_btxW1ToTOAZM92&s',
            name: 'Nazar',
            surname: 'Boxxyy',
            age: '21',
            sex: 'man',
            address: 'Lviv'
        },
        {
            id: '6',
            avatar: 'https://cdn3.iconfinder.com/data/icons/women-avatars/314/1-01-512.png',
            name: 'Irina',
            surname: 'Perun',
            age: '29',
            sex: 'woman',
            address: 'Komarno'
        },
        {
            id: '7',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXbvq8MhynRVIMj8WtRXSLN5quNTSBoFl4hvmKplLPo5qnsTE&s',
            name: 'Veronica',
            surname: 'Perun',
            age: '7',
            sex: 'woman',
            address: 'Komarno'
        },
        {
            id: '8',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83cbwqMY5hTwutBPn1X0xSHMTSqezfVVXM_ZQ3C6nQo48boOd&s',
            name: 'Marian',
            surname: 'Sorokivsky',
            age: '33',
            sex: 'man',
            address: 'Komarno'
        },
        {
            id: '9',
            avatar: 'https://cdn.iconscout.com/icon/free/png-256/ninja-1659490-1410012.png',
            name: 'Eugene',
            surname: 'Kozoriz',
            age: '32',
            sex: 'man',
            address: 'Komarno'
        },
        {
            id: '10',
            avatar: 'https://cdn2.iconfinder.com/data/icons/super-hero/154/ironman-head-comics-avatar-iron-man-512.png',
            name: 'Iron',
            surname: 'Man',
            age: cmm - 1986,
            sex: 'man',
            address: 'Hell Kitchen'
        },
        {
            id: '11',
            avatar: 'https://cdn2.iconfinder.com/data/icons/super-hero/154/ironman-head-comics-avatar-iron-man-512.png',
            name: 'Iron',
            surname: 'Man',
            age: cmm - 1986,
            sex: 'man',
            address: 'Hell Kitchen'
        },
        {
            id: '12',
            avatar: 'https://cdn2.iconfinder.com/data/icons/super-hero/154/ironman-head-comics-avatar-iron-man-512.png',
            name: 'Iron',
            surname: 'Man',
            age: cmm - 1986,
            sex: 'man',
            address: 'Hell Kitchen'
        },
        {
            id: '13',
            avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png',
            name: 'Igor',
            surname: 'Kynitskyi',
            age: '31',
            sex: 'man',
            address: 'Lviv'
        },
    ],
};

const reducerSidebar = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {
                ...state,
                friends: [...action.friends]
            }
        default:
            return state;
    }
};

export const setFriendsActionCreator = friends => ({type: SET_FRIENDS, friends});
export default reducerSidebar;
