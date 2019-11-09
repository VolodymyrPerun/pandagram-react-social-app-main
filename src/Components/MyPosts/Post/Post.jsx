import React from 'react';
import style from './Post.module.scss';

const Post = (props) => {
    return (
        <div>
            <div className={style.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgF7L_dl09HCJP27UJ_o6e67UFFqZP3jUEq6JCNwOZfCX-etnZA&s"
                    alt="avatar"/>
                {props.message}
                <div>
                    <span>like: {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
};

export default Post;
