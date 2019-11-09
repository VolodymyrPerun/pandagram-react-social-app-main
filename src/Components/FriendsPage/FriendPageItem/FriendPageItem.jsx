import React from 'react';
import style from './FriendPageItem.module.scss';
import store from "../../../redux/state";

const FriendsData = (props) => {
    return (
        <div className={style.friendItem}>
            <img  src={props.avatar} />
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
    let friendName = props.map((el) =>
        <FriendsData id={el.id}  avatar={el.avatar} name={el.name} surname={el.surname}
                     age={el.age} address={el.address} sex={el.sex}/>)

    return (
        <div>
            {friendName}
        </div>
    )
};

export default FriendPageItem;
