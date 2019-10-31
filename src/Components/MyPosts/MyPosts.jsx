import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: '3'},
        {id: 2, message: "It's my first post", likesCount: '45'},
        {id: 3, message: "What's up!!! Dude!!!", likesCount: '5'}
    ]

    let posts = postsData.map(post =>
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