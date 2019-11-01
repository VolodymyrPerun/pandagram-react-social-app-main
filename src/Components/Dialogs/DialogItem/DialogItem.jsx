import React from 'react';
import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import MessagesItem from "../Message/Message";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialogsItems}>
            <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogsItem;
