import React from 'react';
import style from './Dialogs.module.scss';
import DialogsItem from "./DialogItem/DialogItem";
import MessagesItem from "./Message/Message";
import dialogsPhoto from "../../assets/images/dialogsPhoto.png"


const Dialogs = props => {

    let state = props.messagesPage;

    let DialogItem = state.dialogsData.map(dialog =>
        <DialogsItem key={dialog.id} id={dialog.id} name={dialog.name}/>);

    let Message = state.messagesData.map(message =>
        <MessagesItem key={message.id} id={message.id} message={message.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    };

    return (
        <div className={style.dialogs}>
            <img
                src={dialogsPhoto}
                alt="img"/>
            <div>
                {DialogItem}
            </div>
            <div>
                <div>
                    <textarea onChange={onMessageChange} value={state.newMessageText} ref={newMessageElement}
                              placeholder='Enter your message...'/>
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
                {Message}
            </div>
        </div>
    )
};

export default Dialogs;
