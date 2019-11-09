import React from 'react';
import style from './Friends.module.scss';
import FriendItem from "./FriendItem/FriendItem";


const Friends = (props) => {

    return (
        <div className={style.wrapper}>
                <h3>Friends:</h3>
                <FriendItem/>
        </div>
    )
};

export default Friends;
