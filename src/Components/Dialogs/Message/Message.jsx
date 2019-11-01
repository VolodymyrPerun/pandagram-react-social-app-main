import React from 'react';
import style from './Message.module.css';


const MessagesItem = (props) => {
    return (
        <div className={style.messages}>
            <div>{props.message}</div>
        </div>
    )
};

const Message = props => {


    return props.messagesData.map(message =>
        <MessagesItem id={message.id} message={message.message}/>
    )

};

export default Message;
