import React from 'react';
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";


const Profile = ({profile, status, updateUserStatus, isFetching}) => {
    return (
        <div className='app-wrapper-content'>
            <ProfileInfo
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
                isFetching={isFetching}
            />
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;
