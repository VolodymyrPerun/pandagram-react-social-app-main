import React from 'react';
import style from './SubmitFollowBtn.module.scss';

const SubmitFollowBtn = React.memo(({handleClick, label}) => {
    return (
        <>
            <button className={style.button} onClick={handleClick}>{label}</button>
        </>
    )
});

export default SubmitFollowBtn;
