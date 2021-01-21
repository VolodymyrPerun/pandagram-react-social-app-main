import React from 'react';
import style from './SubmitFollowBtn.module.scss';

const SubmitFollowBtn = props => {

    return (
        <>
            <button className={style.button} onClick={props.handleClick}>{props.label}</button>
        </>
    )
};

export default SubmitFollowBtn;
