import React from 'react';
import style from './DialogItem.module.scss';
import {NavLink} from "react-router-dom";

const DialogsItem = ({id, name}) => {
    let path = '/dialogs/' + id;
    return (
        <div className={style.dialogsItems}>
            <NavLink activeClassName={style.active} to={path}>{name}</NavLink>
        </div>
    )
};

export default DialogsItem;
