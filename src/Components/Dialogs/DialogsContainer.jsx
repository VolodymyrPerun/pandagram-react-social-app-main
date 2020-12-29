import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogs-reducer'
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) => {
        props.dispatch(updateNewMessageActionCreator(text));
    };

    return (
        <Dialogs
            messagesData={props.state.messagesData}
            dialogsData={props.state.dialogsData}
            newMessageText={props.state.newMessageText}
            addMessage={addMessage}
            onMessageChange={onMessageChange}
        />
    )
};

export default DialogsContainer;
