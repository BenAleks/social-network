import React from 'react';
import css from './Post.module.css'
const Post = () => {
    return (
        <div className={css.item}>
            <img src="https://avatars.mds.yandex.net/i?id=9c52c78614f522bd912094835e9b38e5f68cb9dc-10469104-images-thumbs&n=13" alt=""/>
        post1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;