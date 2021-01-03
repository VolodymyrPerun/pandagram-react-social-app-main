import React from 'react';
import style from './Post.module.scss';

const Post = (props) => {
    return (
        <div>
            <div className={style.item}>
                <img
                    src="https://cdn4.iconfinder.com/data/icons/business-and-office-circle-flat-vol-4/100/chat__comment__message__user__avatar-512.png"
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
