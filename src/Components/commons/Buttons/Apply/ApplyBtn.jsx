import React from 'react';
import style from './ApplyBtn.module.scss';

const ApplyBtn = React.memo(({handleClick, label}) => {
    return (
        <>
            <button className={style.button} onClick={handleClick}>{label}</button>
        </>
    )
});

export default ApplyBtn;
