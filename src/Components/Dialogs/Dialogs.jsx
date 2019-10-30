import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="image"/>
                <div className={style.dialogsItems}>
                <div className={`${style.dialog} ${style.active}`}>
                    Andriy
                </div>
                <div className={style.dialog}>
                    Vasil
                </div>
                <div className={style.dialog}>
                    Volodymyr
                </div>
                <div className={style.dialog}>
                    Victor
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