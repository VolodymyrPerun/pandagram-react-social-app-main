import React from 'react';
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const Profile = props => {
    return (
        <div className='app-wrapper-content'>
            <ProfileInfo
                profile={props.profile}
                isFetching={props.isFetching}
            />
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;
