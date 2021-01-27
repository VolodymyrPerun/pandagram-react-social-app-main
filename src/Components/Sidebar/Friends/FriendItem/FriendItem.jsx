import React from 'react';
import style from './FriendItem.module.scss';
import avatarSmall from "../../../../assets/images/panda_avatar_small.gif";


const FriendsData = ({avatar, name}) => {

    return (
        <div>
            <img
                src={avatar}
                alt="avatar"/>
            <div>{name}</div>
        </div>
    )
};

const FriendItem = ({friends}) => {

    let friendName = friends.map((f, i) =>
        (i !== -1 && i <= 2)
            ? <FriendsData key={f.id}
                           id={f.id}
                           avatar={f.photos.small != null ? f.photos.small : avatarSmall}//photos
                           name={f.name}
            />
            : null);

    return (
        <div className={style.friend}>
            {friendName}
        </div>
    )
};

export default FriendItem;
