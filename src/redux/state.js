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
            {id: '1', name: 'Andriy'},
            {id: '2', name: 'Vasil'},
            {id: '3', name: 'Victor'},
            {id: '4', name: 'Igor'},
            {id: '5', name: 'Nazar'},
            {id: '6', name: 'Irina'}
        ]
    }
};

export default state;
