import React from 'react';
import style from './FriendItem.module.scss';


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

    let state = props.sidebar;

    // eslint-disable-next-line no-unused-vars
    let invalidEntries = 0;

    function filterByID(item, index) {
        if (index !== -1 && index <= 2) {
            return true;
        }
        invalidEntries++;
        return false;
    }

    props = (state.friends).filter(filterByID);
    let friendName = props.map((f) =>
        <FriendsData key={f.id} id={f.id} avatar={f.avatar} name={f.name}/>);

    return (
        <div className={style.friend}>
            {friendName}
        </div>
    )
};

export default FriendItem;
