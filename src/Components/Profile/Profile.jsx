import React from 'react';
import style from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img
                src='https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            <div className={style.item}>Ava+description</div>
            <MyPosts/>
        </div>
    )
};

export default Profile;