import React from 'react';
// import style from './Profile.module.scss';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className='app-wrapper-content'>
            <ProfileInfo/>
            <MyPostsContainer posts={props.state.posts} dispatch={props.dispatch}
             newPostText={props.state.newPostText} />
        </div>
    )
};

export default Profile;
