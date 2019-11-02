import React from 'react';
import style from './FriendItem.module.css';
import state from "../../../../redux/state";

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

    props = state.sidebar.friends;
    let friendName = props.map((name, id) =>
        <FriendsData id={id.id} name={name.name}/>)

    return (
        <div className={style.friend}>
            {friendName}
        </div>
    )
};

export default FriendItem;
