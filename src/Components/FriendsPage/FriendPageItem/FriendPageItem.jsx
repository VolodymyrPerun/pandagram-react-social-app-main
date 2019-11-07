import React from 'react';
import style from './FriendPageItem.module.css';
import store from "../../../redux/state";

const FriendsData = (props) => {
    return (
        <div className={style.friendItem}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZO6BA3-NDBA6PD0KwkmHUrrQiSqip4PZSBbVE4GGmhxIPfVM&s"
                alt="avatar"/>
            <div className={style.info}>
                <div>{'Name:  ' + props.name}</div>
                <div>{'Surname:  ' + props.surname}</div>
                <div>{'Age:  ' + props.age}</div>
                <div>{'Sex:  ' + props.sex}</div>
                <div>{'Address:  ' + props.address}</div>

            </div>
        </div>
    )
};


const FriendPageItem = (props) => {


    props = store.getState().sidebar.friends
    let friendName = props.map((name, id, age, address, surname, sex) =>
        <FriendsData id={id.id} name={name.name} surname={name.surname}
                     age={name.age} address={name.address} sex={name.sex}/>)

    return (
        <div>
            {friendName}
        </div>
    )
};

export default FriendPageItem;
