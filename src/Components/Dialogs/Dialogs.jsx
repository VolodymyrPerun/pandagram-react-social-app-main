import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    return (
        <div className={style.dialogs}>
            <img
                src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="image"/>
            <div>
                <DialogItem/>
            </div>
            <div>
                <Message/>
            </div>
        </div>
    )
};

export default Dialogs;
