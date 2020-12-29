import React from 'react';
import style from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div>
            <img
                src='https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt='Profile'/>
            <div className={style.descriptionBlock}>Ava+description</div>
        </div>
    )
};

export default ProfileInfo;
