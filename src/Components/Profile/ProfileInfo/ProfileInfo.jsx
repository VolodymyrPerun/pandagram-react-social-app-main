import React from 'react';
import style from './ProfileInfo.module.scss';
import profilePagePhoto from '../../../assets/images/profilePhoto.png'

const ProfileInfo = () => {
    return (
        <div>
            <img
                src={profilePagePhoto}
                alt='Profile'/>
            <div className={style.descriptionBlock}>Ava+description</div>
        </div>
    )
};

export default ProfileInfo;
