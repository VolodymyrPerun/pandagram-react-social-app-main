import React from 'react';
import style from './FriendPageItem.module.css';
import state from "../../../redux/state";

const FriendsData = (props) => {
    return (
        <div className={style.friendItem}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZO6BA3-NDBA6PD0KwkmHUrrQiSqip4PZSBbVE4GGmhxIPfVM&s"
                alt="avatar"/>
            <div className={style.info}>
                <div>{'Name:  ' + props.name}</div>
                <div>{'Surname:  ' + props.name}</div>
                <div>{'Age:  ' + props.name}</div>
                <div>{'Sex:  ' + props.name}</div>
                <div>{'Address:  ' + props.name}</div>

            </div>
        </div>
    )
};


const FriendPageItem = (props) => {


    props = state.sidebar.friends
    let friendName = props.map((name, id) =>
        <FriendsData id={id.id} name={name.name}/>)

    return (
        <div>
            {friendName}
        </div>
    )
};

export default FriendPageItem;
