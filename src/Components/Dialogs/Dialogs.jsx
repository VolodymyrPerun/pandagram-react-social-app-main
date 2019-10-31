import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog}>
            <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
};

const MessagesItem = (props) => {
    // let path = '/dialogs/' + props.id;
    return (
        <div className={style.message}>
            <div>{props.message}</div>
        </div>
    )
};

const Dialogs = (props) => {

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
        {id: 4, message: 'Socket.io? Middleware? Token? ... Ease!!!)'}
    ]

    let dialogs = dialogsData.map(dialog =>
        <DialogsItem id={dialog.id} name={dialog.name}/>
    )

    let messages = messagesData.map(message =>
        <MessagesItem id={message.id} message={message.message}/>
    )

    return (
        <div className={style.dialogs}>
            <img
                src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="image"/>
            <div className={style.dialogsItems}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}
            </div>
        </div>
    )
};

export default Dialogs;