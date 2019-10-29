import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={style.item}>
            My posts
            <div className={style.item}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message='Hi, how are you?' likesCount='3'/>
                <Post message="It's my first post" likesCount='45'/>
            </div>
        </div>
    )
};

export default MyPosts;