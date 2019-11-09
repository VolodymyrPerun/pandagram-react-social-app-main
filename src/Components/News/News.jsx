import React from 'react';
import style from './News.module.scss';

const News = () => {
    return (
        <div>
            <img className={style.news}
                 src="https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
           News
        </div>
    )
};

export default News;
