import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem  = (props) => {
    let path = '/dialogs/' + props.id;
    return (
            <div className={style.dialog}>
                <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
            </div>
    )
};

const MessagesItem  = (props) => {
    // let path = '/dialogs/' + props.id;
    return (
            <div className={style.message}>
                <div>{props.message}</div>
            </div>
    )
};

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="image"/>
                <div className={style.dialogsItems}>
                <DialogsItem name='Andriy' id='1' />
                <DialogsItem name='Vasil' id='2' />
                <DialogsItem name='Volodymyr' id='3' />
                <DialogsItem name='Victor' id='4' />
            </div>
            <div className={style.messages}>
                <MessagesItem message='Hi, in node we trust!'/>
                <MessagesItem message='Yo! Front forever!'/>
                <MessagesItem message="What's up! React is top!"/>
                <MessagesItem message='Socket.io? Middleware? Token? ... Ease!!!)'/>
            </div>
        </div>
    )
};

export default Dialogs;