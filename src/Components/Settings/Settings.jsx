import React from 'react';
import style from './Settings.module.scss';
import settingsPagePhoto from '../../assets/images/settingsPagePhoto.png'

const Settings = () => {
    return (
        <div>
            <img className={style.settings}
                 alt='img'
                 src={settingsPagePhoto} />
            Settings
        </div>
    )
};

export default Settings;
