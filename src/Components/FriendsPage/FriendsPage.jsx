import React from 'react';
import style from './FriendsPage.module.scss';
import FriendPageItemContainer from "./FriendPageItem/FriendPageItemContainer";
import FriendsCountContainer from "./FriendsCount/FriendsCountContainer";


const FriendsPage = () => {

    return (

        <div className={style.friendsPage}>
            <img
                src="https://images.pexels.com/photos/935835/pexels-photo-935835.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="img"/>
            <div className={style.infoCount}>
                Wow!!! You have <FriendsCountContainer/> friends!!!
            </div>
            <div>
                <FriendPageItemContainer/>
            </div>
        </div>
    )
};

export default FriendsPage;
