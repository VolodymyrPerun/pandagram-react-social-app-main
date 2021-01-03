import React from 'react';
import style from './FriendPageItem.module.scss';


const FriendPageItem = props => {

    return (
        <>
            {
                props.friendsPage.friends.map((f) =>
                    < div key={f.id}>
                        <div className={style.friendItem}>
                            <img src={f.avatar} alt='img'/>
                            <div className={style.info}>
                                <div className={style.status}>{f.status}</div>
                                <div>{'Name:  ' + f.name}</div>
                                <div>{'Surname:  ' + f.surname}</div>
                                <div>{'Age:  ' + f.age}</div>
                                <div>{'Sex:  ' + f.sex}</div>
                                <div>{'Address:  ' + f.address}</div>
                                <div>{'' + f.followed}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
};

export default FriendPageItem;
