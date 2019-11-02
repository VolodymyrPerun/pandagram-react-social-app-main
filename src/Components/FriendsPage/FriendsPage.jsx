import React from 'react';
import style from './FriendsPage.module.css';
import FriendPageItem from "./FriendPageItem/FriendPageItem";
import FriendsCount from "./FriendsCount/FriendsCount";

const FriendsPage = () => {
    return (
        <div className={style.friendsPage}>
            <img
                src="https://images.pexels.com/photos/935835/pexels-photo-935835.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="image"/>
                <div className={style.infoCount}>
                  Wow!!! You have <FriendsCount/> friends!!!
                </div>
            <div>
                <FriendPageItem/>
            </div>
        </div>
    )
};

export default FriendsPage;
