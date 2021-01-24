const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi, in node we trust!'},
        {id: 2, message: 'Yo! Front forever!'},
        {id: 3, message: "What's up! React is top!"},
        {id: 4, message: 'Socket.io? Middleware? Token? ... Ease!!!)'}
    ],
    dialogsData: [
        {id: 1, name: 'Andriy'},
        {id: 2, name: 'Vasil'},
        {id: 3, name: 'Volodymyr'},
        {id: 4, name: 'Victor'}
    ]
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    {id: 5, message: action.newMessageText}
                ]
            }
        default:
            return state;
    }
};

export const addMessage = newMessageText => ({type: ADD_MESSAGE, newMessageText});
export default dialogsReducer;
