import React from 'react';
import style from './Music.module.scss';
import musicPagePhoto from '../../assets/images/musicPagePhoto.png'

const Music = () => {
    return (
        <div>
            <img className={style.music}
                 alt='img'
                 src={musicPagePhoto}/>
            Music
        </div>
    )
};

export default Music;
