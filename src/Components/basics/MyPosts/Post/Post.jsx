import React from 'react';
import style from './Post.module.scss';
import chatCommentMessageUserAvatar from '../../../../assets/images/chat__comment__message__user__avatar.png'

const Post = ({message, likesCount}) => {

    return (
        <div>
            <div className={style.item}>
                <img
                    src={chatCommentMessageUserAvatar}
                    alt="avatar"/>
                <p>{message}</p>
                <div>
                    <p className={style.like}>likes: <span> {likesCount}</span></p>
                </div>
            </div>
        </div>
    )
};

export default Post;
