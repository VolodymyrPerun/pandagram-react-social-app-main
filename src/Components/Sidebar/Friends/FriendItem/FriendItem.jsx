import React from 'react';
import style from './FriendItem.module.scss';


const FriendsData = (props) => {
    return (
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZO6BA3-NDBA6PD0KwkmHUrrQiSqip4PZSBbVE4GGmhxIPfVM&s"
                alt="avatar"/>
            <div>{props.name}</div>
        </div>
    )
};

const FriendItem = (props) => {

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
    let friendName = props.map((name, id) =>
        <FriendsData id={id.id} name={name.name}/>);

    return (
        <div className={style.friend}>
            {friendName}
        </div>
    )
};

export default FriendItem;
