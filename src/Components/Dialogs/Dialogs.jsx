import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="image"/>
                <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    <NavLink activeClassName={style.active} to='/dialogs/1'>Andriy</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink activeClassName={style.active} to='/dialogs/2'>Vasil</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink activeClassName={style.active} to='/dialogs/3'>Volodymyr</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink activeClassName={style.active} to='/dialogs/4'>Victor</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={`${style.message} ${style.active}`}>
                    Hi, in node we trust!
                </div>
                <div className={style.message}>
                    Yo! Front forever!
                </div>
                <div className={style.message}>
                    What's up! React is top!
                </div>
                <div className={style.message}>
                    Socket.io? Middleware? Token? ... Ease!!!)
                </div>
            </div>
        </div>
    )
};

export default Dialogs;