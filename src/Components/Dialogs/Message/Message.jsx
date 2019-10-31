import React from 'react';
import style from './Message.module.css';


const MessagesItem = (props) => {
    return (
        <div className={style.message}>
            <div>{props.message}</div>
        </div>
    )
};

const Message = (props) => {

    let messagesData = [
        {id: 1, message: 'Hi, in node we trust!'},
        {id: 2, message: 'Yo! Front forever!'},
        {id: 3, message: "What's up! React is top!"},
        {id: 4, message: 'Socket.io? Middleware? Token? ... Ease!!!)'}
    ]

    return messagesData.map(message =>
        <MessagesItem id={message.id} message={message.message}/>
    )

};

export default Message;
