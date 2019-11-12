import React from 'react';
import style from './Dialogs.module.scss';
import DialogsItem from "./DialogItem/DialogItem";
import MessagesItem from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogs-reducer'


const Dialogs = (props) => {


    let DialogItem = props.state.dialogsData.map(dialog =>
        <DialogsItem id={dialog.id} name={dialog.name}/>);


    let Message = props.state.messagesData.map(message =>
        <MessagesItem id={message.id} message={message.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text));

    };


    return (
        <div className={style.dialogs}>
            <img
                src="https://images.pexels.com/photos/263532/pexels-photo-263532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="image"/>
            <div>
                {DialogItem}
            </div>
            <div>
                <div>
                    <textarea onChange={onMessageChange} value={props.state.newMessageText} ref={newMessageElement}
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
