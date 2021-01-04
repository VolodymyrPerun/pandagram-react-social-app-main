import React from 'react';
import style from './Post.module.scss';
import chatCommentMessageUserAvatar from '../../../assets/images/chat__comment__message__user__avatar.png'

const Post = props => {
    return (
        <div>
            <div className={style.item}>
                <img
                    src={chatCommentMessageUserAvatar}
                    alt="avatar"/>
                <p>{props.message}</p>
                <div>
                    <p className={style.like}>likes: <span> {props.likesCount}</span></p>
                </div>
            </div>
        </div>
    )
};

export default Post;
