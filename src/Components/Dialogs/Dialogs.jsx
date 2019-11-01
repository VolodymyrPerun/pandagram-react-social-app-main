import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import MessagesItem from "./Message/Message";


const Dialogs = (props) => {
    // let state = props.messagesPage;
    let DialogItem =  props.state.dialogsData.map(dialog =>
            <DialogsItem id={dialog.id} name={dialog.name}/>)


    let Message = props.state.messagesData.map(message =>
            <MessagesItem id={message.id} message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <img
                src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="image"/>
            <div>
                 {DialogItem}
            </div>
            <div>
                {Message}
            </div>
        </div>
    )
};

export default Dialogs;
