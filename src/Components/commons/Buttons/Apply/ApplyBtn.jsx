import React from 'react';
import style from './ApplyBtn.module.scss';

const ApplyBtn = props => {
    return (
        <>
            <button className={style.button} onClick={props.handleClick}>{props.label}</button>
        </>
    )
};

export default ApplyBtn;
