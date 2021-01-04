import React from 'react';
import style from './FriendPageItem.module.scss';
import * as axios from 'axios';
import avatar from '../../../assets/images/avatar_black.jpg';


const FriendPageItem = props => {
    // if (props.friends.length === 0) {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //         .then(response => {
    //         props.setFriends(response.data.items);
    //     });
    // }
    //
    // console.log(props);

    return (
        <>
            {
                props.friends.map((f) =>
                    < div key={f.id}>
                        <div className={style.friendItem}>
                            <img src={f.avatar != null ? f.avatar: avatar} alt='img'/>
                            <div className={style.info}>
                                <div className={style.status}>{f.status}</div>
                                <div>{'Name:  ' + f.name}</div>
                                <div>{'Surname:  ' + f.surname}</div>
                                <div>{'Age:  ' + f.age}</div>
                                <div>{'Sex:  ' + f.sex}</div>
                                <div>{'Address:  ' + f.address}</div>
                                <div className={style.followed}>
                                    {f.followed ? <button onClick={() => {
                                        props.unfollow(f.id)
                                    }}>Unfollow</button> : <button onClick={() => {
                                        props.follow(f.id)
                                    }}>Follow</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
};

export default FriendPageItem;
