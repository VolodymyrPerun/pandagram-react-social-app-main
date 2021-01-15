import React from 'react';
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const Profile = props => {
    return (
        <div className='app-wrapper-content'>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                isFetching={props.isFetching}
            />
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;
