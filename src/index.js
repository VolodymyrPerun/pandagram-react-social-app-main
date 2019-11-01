import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';





    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: '3'},
        {id: 2, message: "It's my first post", likesCount: '45'},
        {id: 3, message: "What's up!!! Dude!!!", likesCount: '5'}
    ]

    let dialogsData = [
        {id: 1, name: 'Andriy'},
        {id: 2, name: 'Vasil'},
        {id: 3, name: 'Volodymyr'},
        {id: 4, name: 'Victor'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi, in node we trust!'},
        {id: 2, message: 'Yo! Front forever!'},
        {id: 3, message: "What's up! React is top!"},
        {id: 4, message: 'Socket.io? Middleware? Token? ... Ease!!!)'},
    ]


ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();






