import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let posts = props.postsData.map(post =>
        <Post id={post.id} message={post.message} likesCount={post.likesCount}/>
    )

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
                {posts}
            </div>
        </div>
    )
};

export default MyPosts;