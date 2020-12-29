import React from 'react';
import style from './FriendsPage.module.scss';
import FriendPageItem from "./FriendPageItem/FriendPageItem";
import FriendsCount from "./FriendsCount/FriendsCount";


const FriendsPage = (props) => {

    return (

        <div className={style.friendsPage}>
            <img
                src="https://images.pexels.com/photos/935835/pexels-photo-935835.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="img"/>
            <div className={style.infoCount}>
                Wow!!! You have <FriendsCount friends={props.state.friends} dispatch={props.dispatch}/> friends!!!
            </div>
            <div>
                <FriendPageItem friends={props.state.friends} dispatch={props.dispatch}/>
            </div>
        </div>
    )
};

export default FriendsPage;
