import React from 'react';
import style from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className='app-wrapper-content'>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.state.addPost}/>
        </div>
    )
};

export default Profile;
