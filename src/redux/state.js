let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: '3'},
                {id: 2, message: "It's my first post", likesCount: '45'},
                {id: 3, message: "What's up!!! Dude!!!", likesCount: '5'}
            ],
            newPostText : 'Hello!!!'
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
                {id: '1', name: 'Andriy', surname: 'Limych', age: '25', sex: 'man', address: 'Novoyavorivsk'},
                {id: '2', name: 'Vasil', surname: 'Limych', age: '20', sex: 'man', address: 'Buchaly'},
                {id: '3', name: 'Victor', surname: 'Fazer', age: '22', sex: 'man', address: 'Mykolaiv'},
                {id: '4', name: 'Igor', surname: 'Kynitskyi', age: '31', sex: 'man', address: 'Lviv'},
                {id: '5', name: 'Nazar', surname: 'Boxxyy', age: '21', sex: 'man', address: 'Lviv'},
                {id: '6', name: 'Irina', surname: 'Perun', age: '29', sex: 'woman', address: 'Komarno'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('rendering...')
   },
   addPost() {
    
    let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText='';
    this._callSubscriber(this._state);
    },
    updateNewPostText(newText) { 
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
  
        let newMessage = {
            id: 5,
            message: this._state.messagesPage.newMessageText,
        };
        this._state.messagesPage.messagesData.push(newMessage);
        this._state.messagesPage.newMessageText='';
       this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
  
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;//pattern observer
        }
}
 



export default store;
