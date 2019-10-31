import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id:1, message:'Hi, how are you?', likesCount:'3'},
        {id:2, message:"It's my first post", likesCount:'45'},
    ]

    return (
        <div className={style.postsBlock}>
           <h3>My posts</h3> 
            <div className={style.item}>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )
};

export default MyPosts;