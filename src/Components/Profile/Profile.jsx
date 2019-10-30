import React from 'react';
import style from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img
                src='https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
            <div className={style.item}>Ava+description</div>
            <MyPosts/>
        </div>
    )
};

export default Profile;