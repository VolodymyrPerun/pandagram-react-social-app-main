import React from 'react';
import style from './FriendItem.module.scss';
import avatar from "../../../../assets/images/panda_avatar2.gif";


const FriendsData = props => {

    return (
        <div>
            <img
                src={props.avatar}
                alt="avatar"/>
            <div>{props.name}</div>
        </div>
    )
};

const FriendItem = props => {
    console.log(props);
    // let state = props.sidebar;

    // eslint-disable-next-line no-unused-vars
    let invalidEntries = 0;

    function filterByID(item, index) {
        if (index !== -1 && index <= 2) {
            return true;
        }
        invalidEntries++;
        return false;
    }

    props = (props.friends).filter(filterByID);
    let friendName = props.map((f) =>
        <FriendsData key={f.id}
                     id={f.id}
                     avatar={f.photos.large != null ? f.photos.large : avatar}//photos
                     name={f.name}
        />);

    return (
        <div className={style.friend}>
            {friendName}
        </div>
    )
};

export default FriendItem;
