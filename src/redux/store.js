import reducerProfile from './profile-reducer'
import reducerDialogs from './dialogs-reducer'


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: '3'},
                {id: 2, message: "It's my first post", likesCount: '45'},
                {id: 3, message: "What's up!!! Dude!!!", likesCount: '5'}
            ],
            newPostText: 'Hello!!!'
        },
        messagesPage: {
            messagesData: [
                {id: 1, message: 'Hi, in node we trust!'},
                {id: 2, message: 'Yo! Front forever!'},
                {id: 3, message: "What's up! React is top!"},
                {id: 4, message: 'Socket.io? Middleware? Token? ... Ease!!!)'}
            ],
            newMessageText: 'What\'s up!!!',
            dialogsData: [
                {id: 1, name: 'Andriy'},
                {id: 2, name: 'Vasil'},
                {id: 3, name: 'Volodymyr'},
                {id: 4, name: 'Victor'}
            ]
        },
        sidebar: {
            friends: [
                {id: '1', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6rJRc-gmleY_o81I3XqmRUdcbi1cSVA9-0pginDiZcjatHaTm&s', name: 'Andriy', surname: 'Limych', age: '25', sex: 'man', address: 'Novoyavorivsk'},
                {id: '2', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1asMeOM9Iu5WLkWA2zBSt880Byy0pNsBep-mzrmuMdn3ciYJ&s', name: 'Vasil', surname: 'Limych', age: '20', sex: 'man', address: 'Buchaly'},
                {id: '3', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwuUp8Er5oGVlTHuRSa3HOuRK6hCrynJwCz-ILNE4H8v_TXV56Q&s', name: 'Victor', surname: 'Fazer', age: '22', sex: 'man', address: 'Mykolaiv'},
                {id: '4', avatar:'https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png', name: 'Igor', surname: 'Kynitskyi', age: '31', sex: 'man', address: 'Lviv'},
                {id: '5', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sg0fDxi7hWNevmAoJaYwYtporvxrqM8cG_btxW1ToTOAZM92&s', name: 'Nazar', surname: 'Boxxyy', age: '21', sex: 'man', address: 'Lviv'},
                {id: '6', avatar:'https://cdn3.iconfinder.com/data/icons/women-avatars/314/1-01-512.png', name: 'Irina', surname: 'Perun', age: '29', sex: 'woman', address: 'Komarno'},
                {id: '7', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXbvq8MhynRVIMj8WtRXSLN5quNTSBoFl4hvmKplLPo5qnsTE&s', name: 'Veronica', surname: 'Perun', age: '7', sex: 'woman', address: 'Komarno'},
                {id: '8', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83cbwqMY5hTwutBPn1X0xSHMTSqezfVVXM_ZQ3C6nQo48boOd&s', name: 'Marian', surname: 'Sorokivsky', age: '33', sex: 'man', address: 'Komarno'},
                {id: '9', avatar:'https://cdn.iconscout.com/icon/free/png-256/ninja-1659490-1410012.png', name: 'Eugene', surname: 'Kozoriz', age: '32', sex: 'man', address: 'Komarno'}
],
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('rendering...')
    },

    subscribe(observer) {
        this._callSubscriber = observer;//pattern observer
    },

    dispatch(action) {

    this._state.profilePage = reducerProfile(this._state.profilePage, action);
    this._state.messagesPage = reducerDialogs(this._state.messagesPage, action);
    this._callSubscriber(this._state);
 
    }
}

export default store;
