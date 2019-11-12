const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState ={
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
}


 const reducerDialogs = (state = initialState, action) => {
     switch (action.type) {
         case 'ADD_MESSAGE':
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
         case 'UPDATE_NEW_MESSAGE_TEXT':
                state.newMessageText = action.newText;
                return state;
     
         default:
                return state;
     } 
}

export const addMessageActionCreator = () => ({type: 'ADD_MESSAGE'})
export const updateNewMessageActionCreator = (text) => ({type: 'UPDATE_NEW_MESSAGE_TEXT', newText: text})
export default reducerDialogs;