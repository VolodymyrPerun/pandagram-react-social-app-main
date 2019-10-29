import React from 'react';
import style from  './Profile.module.css'; 

const Profile = () => {
    return (
        <div className='content'>
            <img
                src='https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>

           <div className={style.item}>ava</div>
           <div className={style.item}>my post</div>
           <div className={style.item}>new post</div>
           <div className={style.item}>post1</div>
        </div>

        
    )
};

export default Profile;