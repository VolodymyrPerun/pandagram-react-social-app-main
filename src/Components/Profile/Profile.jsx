import React from 'react';
// import style from './Profile.module.scss';
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const Profile = () => {

    return (
        <div className='app-wrapper-content'>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;
