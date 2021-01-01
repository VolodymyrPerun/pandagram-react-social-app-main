import React from 'react';
import style from './Friends.module.scss';
import FriendItemContainer from "./FriendItem/FriendItemContainer";


const Friends = () => {

    return (
        <div className={style.wrapper}>
            <h3>Friends:</h3>
            <FriendItemContainer/>
        </div>
    )
};

export default Friends;
