import React from 'react';
import style from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialogsItems}>
            <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
};

const DialogItem = (props) => {

    let dialogsData = [
        {id: 1, name: 'Andriy'},
        {id: 2, name: 'Vasil'},
        {id: 3, name: 'Volodymyr'},
        {id: 4, name: 'Victor'}
    ]


    return dialogsData.map(dialog =>
        <DialogsItem id={dialog.id} name={dialog.name}/>
    )

};

export default DialogItem;
