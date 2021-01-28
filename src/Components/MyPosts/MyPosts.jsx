import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';
import bg from "../../assets/images/file_item_bg_white.png";
import PostsFormItem from "./FormItem/PostsFormItem";


const MyPosts = ({profilePage, addPost}) => {

    let postElements =
        [...profilePage.posts]
            .reverse()
            .map(post =>
                <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>);


    let onSubmit = formData => {
        addPost(formData.newPostText);
    };

    return (
        <div className={style.postsBlock}>
            <h3>M<span>y </span>p<span>o</span>s<span>t</span>s</h3>
            <div className={style.item}
                 style={{
                     backgroundImage: `url(${bg})`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat'
                 }}>
                <div>
                    <PostsFormItem onSubmit={onSubmit}/>
                </div>

            </div>
            <div className={style.posts}
                 style={{
                     backgroundImage: `url(${bg})`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat'
                 }}>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;
