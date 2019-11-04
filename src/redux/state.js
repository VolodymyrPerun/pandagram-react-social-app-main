import {rerenderEntireTree} from '../render';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '3'},
            {id: 2, message: "It's my first post", likesCount: '45'},
            {id: 3, message: "What's up!!! Dude!!!", likesCount: '5'}
        ]
    },
    messagesPage: {
        messagesData: [
            {"id": 1, "message": 'Hi, in node we trust!'},
            {"id": 2, "message": 'Yo! Front forever!'},
            {"id": 3, "message": "What's up! React is top!"},
            {"id": 4, "message": 'Socket.io? Middleware? Token? ... Ease!!!)'}
        ],
        dialogsData: [
            {"id": 1, "name": 'Andriy'},
            {"id": 2, "name": 'Vasil'},
            {"id": 3, "name": 'Volodymyr'},
            {"id": 4, "name": 'Victor'}
        ]
    },
    sidebar: {
        friends: [
            {id: '1', name: 'Andriy', surname: 'Limych', age: '25', sex: 'man', address: 'Novoyavorivsk'},
            {id: '2', name: 'Vasil', surname: 'Limych', age: '20', sex: 'man', address: 'Buchaly'},
            {id: '3', name: 'Victor', surname: 'Fazer', age: '22', sex: 'man', address: 'Mykolaiv'},
            {id: '4', name: 'Igor', surname: 'Kynitskyi', age: '31', sex: 'man', address: 'Lviv'},
            {id: '5', name: 'Nazar', surname: 'Boxxyy', age: '21', sex: 'man', address: 'Lviv'},
            {id: '6', name: 'Irina', surname: 'Perun', age: '29', sex: 'woman', address: 'Komarno'}
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}


export default state;
