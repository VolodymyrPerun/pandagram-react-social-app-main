import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from '../../redux/profile-reducer'


const MyPostsContainer = (props) => {

    console.log(props);

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <MyPosts
            posts={props.posts}
            newPostText={props.newPostText}
            addPost={addPost}
            onPostChange={onPostChange}
        />
    )
};

export default MyPostsContainer;
