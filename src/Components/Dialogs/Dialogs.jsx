import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import MessagesItem from "./Message/Message";


const Dialogs = (props) => {
    

    let DialogItem =  props.state.dialogsData.map(dialog =>
            <DialogsItem id={dialog.id} name={dialog.name}/>)


    let Message = props.state.messagesData.map(message =>
        <MessagesItem id={message.id} message={message.message}/>)

        let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
         props.updateNewMessageText(text);
    
    }
        

    return (
        <div className={style.dialogs}>
            <img
                src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="image"/>
            <div>
                 {DialogItem}
            </div>
            <div>
            <div>
                    <textarea onChange={onMessageChange} value={props.state.newMessageText} ref={newMessageElement} placeholder='Enter your message...'/>
                </div>
                <div>
                    <button onClick={addMessage} >Add Message</button>
                </div>
                {Message}
            </div>
        </div>
    )
};

export default Dialogs;
