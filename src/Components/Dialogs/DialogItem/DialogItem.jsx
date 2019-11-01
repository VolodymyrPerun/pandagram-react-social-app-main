import React from 'react';
import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import DialogsDataReceived from "../../../index";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialogsItems}>
            <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
};

const DialogItem = (props) => {

    props.map(dialog =>
        <DialogsItem id={dialog.id} name={dialog.name}/>

    return

};

export default DialogItem;
