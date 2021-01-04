import React from 'react';
import style from './News.module.scss';
import newsPagePhoto from '../../assets/images/newsPagePhoto.png'

const News = () => {
    return (
        <div>
            <img className={style.news}
                 alt='img'
                 src={newsPagePhoto}/>
            News
        </div>
    )
};

export default News;
