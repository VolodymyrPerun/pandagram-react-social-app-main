import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';


const MyPosts = (props) => {

    let state = props.profilePage;

    let postElements = state.posts.map(post =>
        <Post id={post.id} message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    };

    return (

        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div className={style.item}>
                <div>
                    <textarea onChange={onPostChange} value={state.newPostText} ref={newPostElement}
                              placeholder='Enter your message...'/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;
