import React from 'react';
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";


const Profile = ({profile, status, updateUserStatus, isFetching, isOwner, savePhoto}) => {
    return (
        <div className='app-wrapper-content'>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
                isFetching={isFetching}
                savePhoto={savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;
