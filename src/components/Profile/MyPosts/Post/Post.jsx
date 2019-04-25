import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src='https://yt3.ggpht.com/a-/AN66SAyL5rE-yTMQYckndvY9XSyEm5khmB07iYUuVg=s900-mo-c-c0xffffffff-rj-k-no'/>
            { props.message}
            <div>
                <span>like</span> { props.likesCount}
            </div>
        </div>

    )
}

export default Post;