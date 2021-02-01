import React from 'react';
import style from './Message.module.scss';


const MessagesItem = ({message}) => {
    return (
        <div className={style.messages}>
            <div>{message}</div>
        </div>
    )
};

export default MessagesItem;
