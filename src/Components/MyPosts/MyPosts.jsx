import React from 'react';
import style from './MyPosts.module.scss';
import Post from './Post/Post';
import TextareaAutosize from 'react-textarea-autosize';
import bg from "../../assets/images/file_item_bg_white.png";
import ApplyBtn from "../Buttons/Apply/ApplyBtn";


const MyPosts = props => {

    let state = props.profilePage;

    let postElements = state.posts.map(post =>
        <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}/>);

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
            <h3>M<span>y </span>p<span>o</span>s<span>t</span>s</h3>
            <div className={style.item}
                 style={{
                     backgroundImage: `url(${bg})`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat'
                 }}>
                <div>
                    <TextareaAutosize
                        className={style.textarea}
                        style={
                            {
                                resize: "none",
                                padding: "9px",
                                boxSizing: "border-box",
                                overflow: "hidden",
                                fontSize: "15px",
                                backgroundColor: "#FFEFBA",
                                wordBreak: "break-word",
                                maxlength: "50"
                            }
                        }
                        minRows={3}
                        maxRows={6}
                        onChange={onPostChange}
                        value={state.newPostText}
                        ref={newPostElement}
                        placeholder='Enter your message...'/>
                </div>
                <div>
                    <ApplyBtn handleClick={addPost} style={{width: '140px', height: '50px'}} label='Add Post'/>
                </div>
            </div>
            <div className={style.posts}
                 style={{
                     backgroundImage: `url(${bg})`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat'
                 }}>>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;
