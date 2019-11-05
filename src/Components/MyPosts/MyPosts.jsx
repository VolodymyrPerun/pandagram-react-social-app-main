import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postElements = props.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
         props.updateNewPostText(text);
    
    }


    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div className={style.item}>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} placeholder='Enter your message...'/>
                </div>
                <div>
                    <button onClick={addPost} >Add Post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;
