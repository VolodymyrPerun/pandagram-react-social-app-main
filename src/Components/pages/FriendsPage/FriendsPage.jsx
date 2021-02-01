import React from 'react';
import style from './FriendsPage.module.scss';
import FriendPageItemContainer from "./FriendPageItem/FriendPageItemContainer";
import FriendsCountContainer from "./FriendsCount/FriendsCountContainer";
import friendsPagePhoto from '../../../assets/images/friendsPagePhoto.png'


const FriendsPage = () => {

    return (
        <div className={style.friendsPage}>
            <img
                src={friendsPagePhoto}
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
