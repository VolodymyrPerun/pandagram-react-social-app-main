import React from 'react';
import style from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className='app-wrapper-content'>
            <ProfileInfo />
            <MyPosts/>
        </div>
    )
};

export default Profile;