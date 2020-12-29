import React from 'react';
import style from './DialogItem.module.scss';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialogsItems}>
            <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogsItem;
